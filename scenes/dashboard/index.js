import * as React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import Profile from "./Profile";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { store } from "../../store";
import { Provider, connect } from "react-redux";
import Feed from "./Feed";
import NewPost from "./posts/NewPost";
import Chats from "./chats";
import { Icon } from "native-base";

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

const ProfileStore = connect(state => ({ state: state }))(Profile);
const FeedStore = connect(state => ({ state: state }))(Feed);
const ChatsStore = connect(state => ({ state: state }))(Chats);
const DrawerHeader = () => <View style={styles.drawerHeaderContainer}>
  <View style={styles.drawerHeaderProfile}>
    <Image source={{ uri: "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg" }} style={styles.profileAvatar} />
    <Text style={styles.profileText}>{store.getState().user.login}</Text>
  </View>
  <View style={styles.separator}></View>

</View>
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Annonces" /*drawerContent={props => <CustomDrawerContent {...props} />}*/>
          <Drawer.Screen name={store.getState().user.login} options={{
            drawerIcon: () => <DrawerHeader />
          }} component={ProfileStore} />
          <Drawer.Screen name="Annonces" options={{
            drawerIcon: () => <Icon style={{ color: "grey" }} type="Entypo" active name="home" />
          }} component={FeedStore} />
          <Drawer.Screen name="Mes RDVs" options={{
            drawerIcon: () => <Icon style={{ color: "grey" }} type="FontAwesome" active name="calendar" />
          }} component={RDVs} />
          <Drawer.Screen name="Historique" options={{
            drawerIcon: () => <Icon style={{ color: "grey" }} type="FontAwesome" active name="history" />
          }} component={Historique} />
          <Drawer.Screen name="Profile" options={{
            drawerIcon: () => <Icon style={{ color: "grey" }} type="Ionicons" active name="md-person" />
          }} component={ProfileStore} />
          <Drawer.Screen name="Nouvelle Annonce" options={{
            drawerIcon: () => <Icon style={{ color: "grey" }} type="Feather" active name="edit" />
          }} component={NewPost} />
          <Drawer.Screen name="Chats" options={{
            drawerIcon: () => <Icon style={{ color: "grey" }} type="Ionicons" active name="ios-chatbubbles" />
          }} component={ChatsStore} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles=StyleSheet.create({
  drawerHeaderContainer:{
    width:"100%"
  },
  drawerHeaderProfile:{
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  profileAvatar:{ width: 50, height: 50, borderRadius: 100 },
  profileText:{ fontWeight: "bold", marginTop: 15, marginLeft: 10 },
  separator:{marginTop:10,width:"100%",backgroundColor:"grey",height:1}
})