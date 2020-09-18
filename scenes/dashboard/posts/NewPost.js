import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ImagePicker from 'react-native-image-picker';

export default () => {
    const [img, setImg] = React.useState({ uri: "https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" });
    const options = {
        title: 'Select Avatar',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };


    return (
        <View style={{marginTop:40}}>
            <Text style={{textAlign:"center"}}>Ajout d'une annonce</Text>
            <TouchableOpacity style={{ width: "100%", height: "50%" }} onPress={() => {
                ImagePicker.showImagePicker(options, (response) => {
                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                    } else {
                        const source = { uri: response.uri };
                        setImg(source)
                    }
                });
            }}>
                <Image source={img} style={{ width: "100%", height: "100%", borderWidth: 1 }} />
            </TouchableOpacity>
            <TextInput placeholder="Votre texte .." />
            <Button title="Publier" onPress={() => { }} />
        </View>
    )
}