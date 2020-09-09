import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export default ({navigation,state,dispatch}) => {
    const [user, setUser] = React.useState({})
    const getData = async () => {
        if (await AsyncStorage.getItem("loggedUser") != null)
            setUser(JSON.parse(await AsyncStorage.getItem("loggedUser")))
    }
    React.useEffect(() => {
        let isSync=false;
        if(!isSync){
            getData();
        }
        return ()=>{
            isSync=true
        }
    },[])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
            <Text>Bonjour {user?.login}</Text>
            <Button title="Déconnecter" onPress={async () => {
                //await AsyncStorage.removeItem("loggedUser")
                //console.log(await AsyncStorage.getItem('loggedUser'))
                dispatch({type:"DISCONNECT",logged:false})
            }}
            />
        </View>
    )
}