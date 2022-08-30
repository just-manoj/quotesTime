import { View, StyleSheet } from 'react-native';
import { useCallback, useEffect } from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Navigation from './src/Navigation/Navigation';
import { store } from './src/redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    title: require('./src/fonts/OdinRounded.otf'),
    quote: require('./src/fonts/BillCorporateNarrow-bold.ttf'),
    button: require('./src/fonts/Lato-Medium.ttf'),
    hint: require('./src/fonts/Arimo-Regular.ttf'),
    inputText: require('./src/fonts/Cantarell-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Provider store={store}>
        <View style={styles.container} onLayout={onLayoutRootView}>
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
