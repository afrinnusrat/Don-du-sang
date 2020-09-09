import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from "./scenes/signIn";
import SignUp from "./scenes/signUp";
import Home from "./scenes/home";
import Dashboard from "./scenes/dashboard"
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Provider, connect } from "react-redux";
import { store } from "./store"
//
const Drawer = createDrawerNavigator();
class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: store.getState().logged,
      isLoading: true
    }
  }
  getToken = async () => {
    if (await AsyncStorage.getItem('loggedUser') != null) {
      console.log(await AsyncStorage.getItem('loggedUser'))
      this.setState({
        isLoading: false
        //,logged:true
      })
    } else {
      this.setState({
        isLoading: false
        //,logged:true
      })
    }
  }
  componentDidMount() {
    this._isMounted = true;
    //console.log(store.getState().logged)
    this.getToken();
    if(this._isMounted){
      store.subscribe(() => {
        this.setState({ logged: store.getState().logged })
      })
    }
  }
  componentWillUnmount(){
    this._isMounted = false;
  }
  render() {
    let HomeStore = connect(state => ({ state: state }))(Home);
    let SignInStore = connect(state => ({ state: state }))(SignIn)
    let SignUpStore = connect(state => ({ state: state }))(SignUp)
    if (this.state.isLoading) {
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
    } else if (this.state.logged && !this.state.isLoading) {
      return (
        <Dashboard />
      );
    }
    else {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeStore} />
              <Drawer.Screen name="SignInScreen" component={SignInStore} />
              <Drawer.Screen name="SignUpScreen" component={SignUpStore} />
              {/*<Drawer.Screen name="DashboardScreen" component={Dashboard} />*/}
            </Drawer.Navigator>
          </NavigationContainer>
        </Provider>
      );
    }

  }
}
/*function App() {
  //
  const [logged, setLogged] = React.useState(store.getState().logged);
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
    this._isMounted = true;
    //console.log(store.getState().logged)
    store.subscribe(() => {
      setLogged(store.getState().logged)
    })
    getToken();
  }, []);
  let HomeStore = connect(state => ({ state: state }))(Home);
  let SignInStore = connect(state => ({ state: state }))(SignIn)
  let SignUpStore = connect(state => ({ state: state }))(SignUp)
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
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStore} />
            <Drawer.Screen name="SignInScreen" component={SignInStore} />
            <Drawer.Screen name="SignUpScreen" component={SignUpStore} />
            {<Drawer.Screen name="DashboardScreen" component={Dashboard} />}
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}*/


export default App;
