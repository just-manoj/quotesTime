import { View, Text, TextInput, StyleSheet } from 'react-native';

import { globalStyles } from '../globalStyles/globalStyles';

const InputText = (props) => {
  const { title, style, inputProps, isValid } = props;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.hint,
          !isValid && { color: globalStyles.colors.errorText },
        ]}
      >
        {title}
      </Text>
      <TextInput
        {...inputProps}
        underlineColorAndroid='transparent'
        autoCorrect={false}
        style={[
          styles.input,
          style,
          !isValid && { backgroundColor: globalStyles.colors.errorBackGround },
        ]}
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
    fontFamily: 'hint',
    marginLeft: 2,
    marginBottom: 4,
    color: globalStyles.colors.inputHint,
    fontSize: 13,
  },
  input: {
    fontFamily: 'inputText',
    padding: 5,
    backgroundColor: globalStyles.colors.quoteBackground,
    borderRadius: 4,
    fontSize: 14,
    color: globalStyles.colors.inputText,
  },
});
