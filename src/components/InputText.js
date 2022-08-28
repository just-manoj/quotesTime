import { View, Text, TextInput, StyleSheet } from 'react-native';

import { globalStyles } from '../globalStyles/globalStyles';

const InputText = (props) => {
  const { title, style } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>{title}</Text>
      <TextInput
        underlineColorAndroid='transparent'
        autoCorrect={false}
        style={[styles.input, style]}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 5,
    elevation: 4,
  },
  hint: {
    marginLeft: 2,
    marginBottom: 4,
    color: globalStyles.colors.inputHint,
    fontSize: 13,
  },
  input: {
    padding: 5,
    backgroundColor: globalStyles.colors.quoteBackground,
    borderRadius: 4,
    fontSize: 14,
    fontWeight: '600',
    color: globalStyles.colors.inputText,
  },
});
