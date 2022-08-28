import { View, Text, StyleSheet, TextInput } from 'react-native';
import InputText from '../components/InputText';

import { globalStyles } from '../globalStyles/globalStyles';

const ManageQuote = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Quote</Text>
      <View style={styles.secondaryContainer}>
        <InputText title='Name' />
        <InputText
          title='Quote'
          style={{ multiline: true, textAlignVertical: 'top', height: 100 }}
        />
      </View>
    </View>
  );
};

export default ManageQuote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.screenBackground,
    paddingTop: 110,
  },
  secondaryContainer: {
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});
