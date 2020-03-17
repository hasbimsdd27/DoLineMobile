import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../screens/Landing';
import Login from '../screens/Login';
import Main from '../screens/Main';
import MyTicket from '../screens/MyTicket';
import Account from '../screens/Account';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="MyTicket" component={MyTicket} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
