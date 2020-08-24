import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from "./scenes/signIn";
import SignUp from "./scenes/signUp";
import Home from "./scenes/home";
import Dashboard from "./scenes/dashboard"
//
const Drawer = createDrawerNavigator();

function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SignInScreen" component={SignIn} />
        <Drawer.Screen name="SignUpScreen" component={SignUp} />
        <Drawer.Screen name="DashboardScreen" component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;
