import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { dateFormat, findDay, findTime } from '../utils/date';

const QuoteItem = (props) => {
  const { name, quote, date } = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.quoteContainer}>
          <MaterialCommunityIcons
            name='format-quote-open'
            size={22}
            color='#e0d7d7'
          />
          <Text style={styles.quoteText}>{quote}.</Text>
        </View>
      </View>
      <View style={styles.subTextContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <Text style={[styles.text, styles.dateText]}>{findDay(date)}</Text>
          <Text style={[styles.text, styles.dateText]}> {findTime(date)}</Text>
        </View>
        <Text style={styles.text}>-{name}</Text>
      </View>
    </View>
  );
};

export default QuoteItem;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: (5 * windowWidth) / 6,
    margin: 8,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: '#2d2e30',
  },
  subContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 50,
  },
  quoteContainer: {
    flexDirection: 'row',
  },
  quoteText: {
    fontSize: 16,
    color: '#e0d7d7',
    fontWeight: '600',
  },
  subTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 18,
    paddingTop: 3,
    paddingBottom: 10,
  },
  text: {
    fontWeight: '600',
    fontSize: 13,
    color: 'white',
  },
  dateText: {
    fontSize: 11,
  },
});
