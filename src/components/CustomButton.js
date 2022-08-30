import { View, Text, Pressable, StyleSheet } from 'react-native';
import { globalStyles } from '../globalStyles/globalStyles';

const CustomButton = (props) => {
  const { children, style, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.6 }}
    >
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    padding: 5,
    backgroundColor: globalStyles.colors.inputHint,
    borderRadius: 4,
  },
  text: {
    fontFamily: 'button',
    textAlign: 'center',
    color: globalStyles.colors.tabBarActive,
  },
});
