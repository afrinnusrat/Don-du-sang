import React from "react";
import { View, Text, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { store } from "../../../../store"
export default ({ route }) => {
    const { chatTarget, chat_destination, state } = route.params;
    const [messages, setMessages] = React.useState(chatTarget ? chatTarget : []);
    const [newMessage, setNewMessage] = React.useState("");
    const { user } = state;

    const getDestination = () => {
        let destination = ""
        messages.forEach(mssg => {
            if (mssg.source.name !== user.login) destination = mssg.source.name;
            else destination = mssg.destination.name;
        })
        return destination;
    }
    return (
        <View style={styles.container}>
            <View style={styles.chatTopBar}>
                <Image source={{ uri: "https://picsum.photos/200/300?london" }} style={{ borderRadius: 100, width: 40, height: 40, marginRight: 10, marginLeft: 5, marginTop: 5 }} />
                <Text style={{ marginTop: 15, fontWeight: "bold", color: "black" }}>{chat_destination}</Text>
                <View style={{ position: "absolute", right: 20, top: 20, width: 10, height: 10, backgroundColor: "red", borderRadius: 100 }}></View>
            </View>
            <ScrollView style={{ marginTop: 20, marginLeft: 10 }}>
                {messages.map((mssg, index) => {
                    return (
                        <View key={index} style={styles.chatContainer}>
                            <Image source={{ uri: "https://picsum.photos/200/300?london" }} style={{ borderRadius: 100, width: 50, height: 50, marginRight: 3 }} />
                            <Text style={{ width: 250, marginTop: 10 }}>
                                <Text style={{ fontWeight: "bold" }}>{mssg.source.name === user.login ? "Vous : " : mssg.source.name + " : "}</Text>
                                {mssg.message}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
            <View style={styles.newMssgContainer}>
                <Image source={{ uri: "https://picsum.photos/200/300?london" }} style={{ borderRadius: 100, width: 50, height: 50, marginRight: 3 }} />
                <TextInput placeholder="Votre message" value={newMessage} onChangeText={setNewMessage} style={{ height: 48, borderWidth: 1, borderRadius: 12, width: "68%", marginTop: 2 }} />
                <Icon name="send" style={styles.sendIcon} onPress={() => {
                    let moreMessages = messages;
                    moreMessages.push({
                        id: moreMessages.length,
                        source: { name: user.login, avatar: "https://picsum.photos/200/300?chat" },
                        destination: { name: chat_destination, avatar: "https://picsum.photos/200/300?chat" },
                        message: newMessage
                    });
                    setMessages(moreMessages);
                    setNewMessage("")
                    store.dispatch({
                        type: "ADD_CHAT", newChat: {
                            id: moreMessages.length,
                            source: { name: user.login, avatar: "https://picsum.photos/200/300?chat" },
                            destination: { name: chat_destination, avatar: "https://picsum.photos/200/300?chat" },
                            message: newMessage
                        }
                    })
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    newMssgContainer: {
        position: "absolute", bottom: 10, left: 5,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    sendIcon: {
        marginLeft: 0, marginTop: -3,
        color: "grey",
        fontSize: 55
    },
    chatTopBar: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row', width: "100%", height: 50, backgroundColor: "white",
        shadowColor: "rgba(121,107,107,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0
    },
    chatContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row', marginBottom: 10
    }
})