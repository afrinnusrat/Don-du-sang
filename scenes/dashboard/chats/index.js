import React from "react";
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Item, Input } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import RoomChat from "./room";
import {store} from "../../../store"
const Chats = ({ route, navigation }) => {
    const { state } = route.params;
    const [chats, setChats] = React.useState(state.chats)

    const mirrorExistance = (tb, ct) => {
        let exists = false
        tb.forEach(chat => {
            if (chat.source.name === ct.source.name || chat.destination.name === ct.source.name || chat.source.name === ct.destination.name || chat.destination.name === ct.destination.name) {
                exists = true
            }
        })
        return exists;
    }
    const getChats = () => {
        let chatters = []
        let lastChatters = []
        chats.forEach(chat => {
            if (chat.source.name === state.user.login || chat.destination.name === state.user.login)
                chatters.push(chat)
        })
        chatters.forEach(chatter => {
            if (!mirrorExistance(lastChatters,chatter)){
                lastChatters.push(chatter)
            }
        })
        return [chatters,lastChatters];
    }
    const extracted_Chat=(chatterName)=>{
        let extractedChat=[]
        getChats()[0].forEach(chat=>{
            if(chat.source.name===chatterName || chat.destination.name===chatterName){
                extractedChat.push(chat)
            }
        })
        return extractedChat;
    }
    React.useEffect(()=>store.subscribe(()=>setChats(store.getState().chats)))
    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Rechercher" />
                    <Icon name="chatbubbles" />
                </Item>
            </Header>
            <List>
                {getChats()[1].map((chat, index) => {
                    return (
                        <ListItem key={index} avatar onPress={() => navigation.navigate("RoomChat", { state:state,chatTarget: extracted_Chat(chat.source.name!==state.user.login?chat.source.name:chat.destination.name) })}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://picsum.photos/200/300?london' }} />
                            </Left>
                            <Body>
                                <Text>{state.user.login == chat.source.name ? chat.destination.name : chat.source.name}</Text>
                                <Text note>{state.user.login == chat.source.name ? "Vous : " : ""}{chat.message}</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    )
                })}
            </List>
        </Container>
    )
}

const Stack = createStackNavigator();
export default function App({ state }) {
    return (
        <Stack.Navigator initialRouteName="Chats">
            <Stack.Screen name="Chats" component={Chats} options={{
                headerShown: false
            }} initialParams={{ state: state }} />
            <Stack.Screen name="RoomChat" options={{
                headerShown: false
            }} component={RoomChat} />
        </Stack.Navigator>
    );
}