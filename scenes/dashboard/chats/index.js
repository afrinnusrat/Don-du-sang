import React from "react";
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Item, Input } from 'native-base';

export default ({state}) => {
    const [chats, setChats] = React.useState([
        {
            id: 0, source: { name: "Tomas", avatar: "" }, destination: { name: "Keven" }, message: "Always keep trying .. unfold your core"
        }
    ])
    React.useState(()=>console.log(state))
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
                {chats.map((chat,index) => {
                    return (
                        <ListItem key={index} avatar onPress={() => null}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://picsum.photos/200/300?london' }} />
                            </Left>
                            <Body>
                                <Text>{state.user.login==chat.source.name?chat.destination.name:chat.source.name}</Text>
                                <Text note>{state.user.login==chat.source.name?"Vous : ":""}{chat.message}</Text>
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
