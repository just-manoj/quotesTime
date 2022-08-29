import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import QuoteItem from '../components/QuoteItem';
import { globalStyles } from '../globalStyles/globalStyles';
import { setQuote } from '../redux/QuotesData';
import { fetchQuoteDetails } from '../utils/http';
import LoadingScreen from '../components/LoadingScreen';

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
      dispatch(setQuote({ quotesDetails: data }));
      setIsFetched(true);
    };
    getQuoteDetails();
  }, []);

  if (!isFetched) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quotes Time</Text>
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
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    marginLeft: 50,
    marginTop: 35,
    marginBottom: 10,
  },
  list: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
