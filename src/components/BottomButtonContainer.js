import { View, StyleSheet } from 'react-native';

import CustomButton from './CustomButton';

const BottomButtonContainer = (props) => {
  const { cancelHandler, confirmHandler, addNewQuote } = props;
  return (
    <View style={styles.buttonContainer}>
      <CustomButton
        onPress={cancelHandler}
        style={{ backgroundColor: 'transparent' }}
      >
        Cancel
      </CustomButton>
      <CustomButton onPress={confirmHandler}>
        {addNewQuote ? 'Add' : 'Update'}
      </CustomButton>
    </View>
  );
};

export default BottomButtonContainer;

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
});
