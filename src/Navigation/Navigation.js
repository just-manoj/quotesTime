import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation } from '@expo/vector-icons';

import QuotesList from '../screens/QuotesList';
import ManageQuote from '../screens/ManageQuote';

const Navigation = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#2D2E2F',
            height: 57,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#ece1e1',
          tabBarInactiveTintColor: '#86808f',
          headerShown: false,
        }}
      >
        <BottomTab.Screen
          name='QuotesList'
          component={QuotesList}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ size, color }) => (
              <Foundation
                name='clipboard-notes'
                size={size + 3.5}
                color={color}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name='ManageQuote'
          component={ManageQuote}
          options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({ size, color }) => (
              <Foundation
                name='clipboard-pencil'
                size={size + 2.5}
                color={color}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
