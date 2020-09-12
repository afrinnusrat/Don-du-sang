import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Profile from "./Profile";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { store } from "../../store";
import { Provider,connect } from "react-redux";
import Feed from "./Feed"

function RDVs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>RDVs Screen</Text>
    </View>
  );
}
function Historique() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mon historique</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

let ProfileStore=connect(state => ({ state: state }))(Profile)
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Feed" component={Feed} />
          <Drawer.Screen name="Mes RDVs" component={RDVs} />
          <Drawer.Screen name="Historique" component={Historique} />
          <Drawer.Screen name="Profile" component={ProfileStore} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
