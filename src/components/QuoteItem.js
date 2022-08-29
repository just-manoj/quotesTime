import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { findDay, findTime } from '../utils/date';
import { globalStyles } from '../globalStyles/globalStyles';

const QuoteItem = (props) => {
  const { name, quote, date } = props;
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: globalStyles.colors.quoteText }}>
        <View style={styles.subContainer}>
          <View style={styles.quoteContainer}>
            <MaterialCommunityIcons
              name='format-quote-open'
              size={22}
              color={globalStyles.colors.quoteText}
            />
            <Text style={styles.quoteText}>{quote}.</Text>
          </View>
        </View>
        <View style={styles.subTextContainer}>
          <View style={styles.dateTimeContainer}>
            <Text style={[styles.text, styles.dateText]}>{findDay(date)}</Text>

            <Text style={[styles.text, styles.dateText]}>
              {'  '}
              {findTime(date)}
            </Text>
          </View>
          <Text style={styles.text}>-{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default QuoteItem;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: 0.8 * windowWidth,
    margin: 8,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: globalStyles.colors.quoteBackground,
    overflow: 'hidden',
  },
  subContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 50,
  },
  quoteContainer: {
    flexDirection: 'row',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 16,
    color: globalStyles.colors.quoteText,
    fontWeight: '600',
  },
  subTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 18,
    paddingTop: 7,
    paddingBottom: 15,
  },
  text: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  dateText: {
    fontSize: 11,
  },
});
