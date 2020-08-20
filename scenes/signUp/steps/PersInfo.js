import React from "react";
import { View, Text, Image } from "react-native";
import { Picker } from '@react-native-community/picker';

//
import CustomInputText from "../../../generic/CustomInputText";
import CustomButton from "../../../generic/CustomButton";
//
import styles from "./styling";

function PersInfo(props) {
    return (
        <View style={styles.container}>
            <View style={styles.sloganContainer}>
                <Text style={styles.sloganClass}>Don du sang</Text>
                <Image
                    source={require("../../../assets/images/blood_donation.png")}
                    resizeMode="contain"
                    style={styles.image1}
                ></Image>
            </View>
            <CustomInputText style={styles.nameClass} onChangeText={props.onChangeLName} placeholder="Nom"></CustomInputText>
            <CustomInputText style={styles.nameClass} onChangeText={props.onChangeFName} placeholder="Prenom"></CustomInputText>
            <View style={styles.genderPicker}>
                <Picker
                    mode="dropdown"
                    prompt="Genre"
                    selectedValue={props.user.gender}
                    style={{ width: 265, marginTop: -5 }}
                    onValueChange={props.onChangeGender}
                >
                    <Picker.Item label="Homme" value="Homme" />
                    <Picker.Item label="Femme" value="Femme" />
                </Picker>
            </View>

            <CustomInputText style={styles.psswdClass} onChangeText={props.onChangePassword} isPassword placeholder="Mot de passe" withIcon></CustomInputText>
            <CustomInputText style={styles.phoneClass} onChangeText={props.onChangePhoneNumber} placeholder="Téléphone"></CustomInputText>
            <CustomButton text="Continuer" style={styles.confirmClass} action={props.action}></CustomButton>
            <Text style={{ position: "relative", top: 20 }} onPress={() => {
                props.navigation.navigate('SignInScreen');
                //setFirstTime(false)
            }}>Vous avez un compte ?</Text>
        </View>
    );
}


export default PersInfo;
