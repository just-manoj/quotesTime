import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Foundation } from '@expo/vector-icons';

import QuotesList from '../screens/QuotesList';
import ManageQuote from '../screens/ManageQuote';
import { globalStyles } from '../globalStyles/globalStyles';

const BottomNavigators = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: globalStyles.colors.tabBarBackground,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: globalStyles.colors.tabBarActive,
          tabBarInactiveTintColor: globalStyles.colors.tabBarInActive,
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
    </>
  );
};

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='main' component={BottomNavigators} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
