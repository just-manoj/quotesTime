import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import QuoteItem from '../components/QuoteItem';
import { globalStyles } from '../GlobalStyles/globalStyles';

const renderQuote = (quoteDetails) => {
  return <QuoteItem {...quoteDetails.item} />;
};

const QuotesList = () => {
  const quoteDetails = useSelector((state) => state.quotesData.quotes);
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
  },
  list: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
