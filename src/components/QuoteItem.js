import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../globalStyles/globalStyles';
import { useNavigation } from '@react-navigation/native';

import { findDay, findTime } from '../utils/date';

const QuoteItem = (props) => {
  const { id, name, quote, date } = props;
  const navigation = useNavigation();

  return (
    <Pressable
      onLongPress={() =>
        navigation.navigate('ManageQuote', {
          defaultValue: { quoteId: id, name: name, quote: quote, date: date },
        })
      }
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
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
            <Text style={[styles.text, styles.dateText]}>
              {findDay(new Date(date))}
            </Text>
            <Text style={[styles.text, styles.dateText]}>
              {'  '}
              {findTime(new Date(date))}
            </Text>
          </View>
          <Text style={styles.text}>-{name}</Text>
        </View>
      </View>
    </Pressable>
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
    fontFamily: 'quote',
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
    fontFamily: 'inputText',
    fontSize: 14,
    color: 'white',
  },
  dateText: {
    fontSize: 11,
  },
  pressed: {
    opacity: 0.6,
  },
});
