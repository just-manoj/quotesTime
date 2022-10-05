import { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import QuoteItem from '../components/QuoteItem';
import { globalStyles } from '../globalStyles/globalStyles';
import { readQuote } from '../redux/QuotesData';
import { fetchQuoteDetails } from '../utils/http';
import LoadingScreen from '../components/LoadingScreen';
import QuoteListHeader from '../components/QuoteListHeader';

const renderQuote = (quoteDetails) => {
  return <QuoteItem {...quoteDetails.item} />;
};

const QuotesList = () => {
  const [isFetched, setIsFetched] = useState(false);
  const dispatch = useDispatch();
  const quoteDetails = useSelector((state) => state.quotesData.quotes);

  useEffect(() => {
    const getQuoteDetails = async () => {
      const data = await fetchQuoteDetails();
      dispatch(readQuote({ quotesDetails: data }));
      setIsFetched(true);
    };
    getQuoteDetails();
  }, []);

  if (!isFetched) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>
      <QuoteListHeader />
      <View style={styles.list}>
        <FlatList
          data={quoteDetails}
          keyExtractor={(item) => item.id}
          renderItem={renderQuote}
        />
      </View>
    </View>
  );
};

export default QuotesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.screenBackground,
  },

  list: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -15,
  },
});
