import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from "./scenes/signIn";
import SignUp from "./scenes/signUp";
import Home from "./scenes/home";
import Dashboard from "./scenes/dashboard"
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

//
const Drawer = createDrawerNavigator();

function App() {
  //
  const [logged, setLogged] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const getToken = async () => {
    if (await AsyncStorage.getItem('loggedUser') != null) {
      console.log(await AsyncStorage.getItem('loggedUser'))
      setIsLoading(false);
      setLogged(true);
    } else {
      setIsLoading(false);
      setLogged(false); // this can be removed
    }
  }
  React.useEffect(() => {
    console.log("Home here !!")
    getToken();
  }, []);
  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }}>
        <ActivityIndicator color="red" size="large" />
      </View>
    )
  } else if (logged && !isLoading) {
    return (
      <Dashboard />
    );
  }
  else {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="SignInScreen" component={SignIn} />
          <Drawer.Screen name="SignUpScreen" component={SignUp} />
          {/*<Drawer.Screen name="DashboardScreen" component={Dashboard} />*/}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;
