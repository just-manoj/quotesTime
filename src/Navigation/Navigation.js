import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import QuotesList from '../screens/QuotesList';
import ManageQuote from '../screens/ManageQuote';

const Navigation = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='QuotesList' component={QuotesList} />
        <BottomTab.Screen name='ManageQuote' component={ManageQuote} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
