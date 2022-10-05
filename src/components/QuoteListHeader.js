import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const QuoteListHeader = () => {
  const navigation = useNavigation();
  const navigateScreen = () => {
    navigation.navigate('ManageQuote', { addNewQuote: true });
  };

  return (
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
  );
};

export default QuoteListHeader;

export const styles = StyleSheet.create({
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
});
