import { View, Text, StyleSheet } from 'react-native';

const QuotesList = () => {
  return (
    <View style={styles.container}>
      <Text>QuotesList Screen</Text>
    </View>
  );
};

export default QuotesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202120',
  },
});
