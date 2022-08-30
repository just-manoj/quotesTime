import { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import QuoteItem from '../components/QuoteItem';
import { globalStyles } from '../globalStyles/globalStyles';
import { setQuote } from '../redux/QuotesData';
import { fetchQuoteDetails } from '../utils/http';
import LoadingScreen from '../components/LoadingScreen';

const renderQuote = (quoteDetails) => {
  return <QuoteItem {...quoteDetails.item} />;
};

const QuotesList = () => {
  const navigation = useNavigation();
  const [isFetched, setIsFetched] = useState(false);
  const dispatch = useDispatch();
  const quoteDetails = useSelector((state) => state.quotesData.quotes);

  const navigateScreen = () => {
    navigation.navigate('ManageQuote');
  };

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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Quotes Time</Text>
        <View style={styles.icon}>
          <Pressable
            onPress={navigateScreen}
            style={({ pressed }) => pressed && { opacity: 0.6 }}
          >
            <AntDesign name='plus' size={25} color='white' />
          </Pressable>
        </View>
      </View>
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginTop: 45,
  },
  title: {
    fontFamily: 'title',
    fontSize: 25,
    color: 'white',
  },

  icon: {
    marginTop: 2,
    marginRight: 20,
  },
  list: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -15,
  },
});
