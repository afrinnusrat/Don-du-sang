import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{title: 'تسجيل الدخول', headerTitleAlign: 'center'}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{title: 'إنشاء حساب', headerTitleAlign: 'center'}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
