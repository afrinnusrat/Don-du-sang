import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import Icon from "react-native-vector-icons/Entypo";

export default ({ navigation, state, dispatch }) => {
    const [user, setUser] = React.useState({})
    const getData = async () => {
        if (await AsyncStorage.getItem("loggedUser") != null)
            setUser(JSON.parse(await AsyncStorage.getItem("loggedUser")))
    }
    React.useEffect(() => {
        let isSync = false;
        if (!isSync) {
            getData();
        }
        return () => {
            isSync = true
        }
    }, [])
    return (
        <View style={styles.container}>
            <Icon name="log-out" style={styles.logout} onPress={() => dispatch({ type: "DISCONNECT", logged: false })} />
            <Image style={styles.profileAvatar} source={{ uri: "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg" }} />
            <View>
                <Text style={styles.title}><Text style={styles.subtitle}>Bio :</Text>{"\n"}Je suis un donneur régulier et {"\n"}aime donner du sang pour sauver des vies.</Text>
                <Text style={styles.title}><Text style={styles.subtitle}>Nom d'utilisateur : </Text>{state.user.login}</Text>
                <Text style={styles.title}><Text style={styles.subtitle}>Groupe sanguin : </Text>{state.user.bloodGroup || "O+"}</Text>
                <Text style={styles.title}><Text style={styles.subtitle}>Localisation : </Text>{state.user.location}</Text>
            </View>
            {/*<Button title="Déconnecter" onPress={async () => {
                await AsyncStorage.removeItem("loggedUser")
                //console.log(await AsyncStorage.getItem('loggedUser'))
                dispatch({ type: "DISCONNECT", logged: false })
            }}
        />*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center' },
    profileAvatar: { width: 150, height: 150, marginTop: "30%", borderRadius: 100, marginBottom: 30 },
    logout: { color: "rgba(96,3,14,1)", fontSize: 30, position: "absolute", right: 10, top: 10 },
    title: { marginBottom: 10 },
    subtitle: { fontWeight: 'bold' }
})