import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import Navigation from './src/Navigation/Navigation';
import { store } from './src/redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
