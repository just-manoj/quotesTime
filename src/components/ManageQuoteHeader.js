import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ManageQuoteHeader = (props) => {
  const navigation = useNavigation();
  const { addNewQuote, headerPressHandler } = props;

  const pressHandler = () => {
    if (addNewQuote) {
      headerPressHandler('add');
    } else {
      headerPressHandler('delete');
      //   navigation.goBack;
    }
  };
  return (
    <View style={styles.headerContainer}>
      <Pressable
        style={({ pressed }) => pressed && { opacity: 0.6 }}
        onPress={navigation.goBack}
      >
        <Ionicons name='chevron-back-sharp' size={30} color='white' />
      </Pressable>
      <Text style={styles.title}>
        {addNewQuote ? 'Add Quote' : 'Update Quote'}
      </Text>
      <Pressable
        style={({ pressed }) => pressed && { opacity: 0.6 }}
        onPress={pressHandler}
      >
        {!addNewQuote ? (
          <MaterialIcons name='delete' size={30} color='white' />
        ) : (
          <Feather name='check' size={30} color='white' />
        )}
      </Pressable>
    </View>
  );
};

export default ManageQuoteHeader;

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  title: {
    fontFamily: 'title',
    fontSize: 25,
    color: 'white',
  },
});
