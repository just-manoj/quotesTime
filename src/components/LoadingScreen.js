import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { globalStyles } from '../globalStyles/globalStyles';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={globalStyles.colors.quoteText} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalStyles.colors.screenBackground,
  },
});
