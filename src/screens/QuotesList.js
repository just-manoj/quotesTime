import { View, Text, StyleSheet, FlatList } from 'react-native';
import QuoteItem from '../components/QuoteItem';

import { DummyData } from '../utils/DummyData';

const renderQuote = (quoteDetails) => {
  return <QuoteItem {...quoteDetails.item} />;
};

const QuotesList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quotes Time</Text>
      <View style={styles.list}>
        <FlatList
          data={DummyData}
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
    backgroundColor: '#202120',
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
