import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuotesList from '../screens/QuotesList';
import ManageQuote from '../screens/ManageQuote';

const Navigation = () => {
  const StackNative = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackNative.Navigator>
        <StackNative.Screen
          name='QuotesList'
          component={QuotesList}
          options={{
            headerShown: false,
          }}
        />
        <StackNative.Screen
          name='ManageQuote'
          component={ManageQuote}
          options={{
            headerShown: false,
          }}
        />
      </StackNative.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
