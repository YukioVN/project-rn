import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/Signin';
import SignUp from '../screens/Signup';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}