import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Toast } from "native-base";
import SignUp from "../signUp";
//
import CustomButton from "../../generic/CustomButton";
import CustomInputText from "../../generic/CustomInputText";
import CustomBtnIcon from "../../generic/CustomBtnIcon";
//
import styles from "./styling";

export default function SignIn() {
    const [firstTime, setFirstTime] = React.useState(false);
    const [userInfos, setUserInfos] = React.useState({ login: "", password: "" });
    const onChangeLogin = (text) => {
        setUserInfos({ ...userInfos, login: text });
    };
    const onChangePsswd = (text) => {
        setUserInfos({ ...userInfos, password: text });
    }
    const connexion = () => {
        // gotta add axios here

        //
        if (userInfos.login === "Tomas" && userInfos.password === "aaa") {
            Toast.show({
                text: "Bienvenue!",
                buttonText: "Okay",
                position: "bottom"
            });
        } else {
            Toast.show({
                text: "Une Mauvaise Saisie!",
                buttonText: "Okay",
                position: "bottom"
            });
        }
    }
    if (firstTime) {
        return <SignUp />
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.sloganContainer}>
                    <Text style={styles.sloganClass}>Don du sang</Text>
                    <Image
                        source={require("../../assets/images/blood_donation.png")}
                        resizeMode="contain"
                        style={styles.image}
                    ></Image>
                </View>
                <CustomInputText style={styles.loginInput} placeholder="Login :" withIcon={false} onChangeText={onChangeLogin}></CustomInputText>
                <CustomInputText style={styles.passwordInput} isPassword placeholder="Mot de passe :" withIcon={true} onChangeText={onChangePsswd}></CustomInputText>
                <CustomButton action={connexion} text="Confirmer" style={styles.confirmBtn}></CustomButton>
                <Text style={{ position: "relative", top: 20 }} onPress={() => setFirstTime(true)}>Pas de compte ?</Text>
                <CustomBtnIcon style={styles.shareBtn} iconName="share"></CustomBtnIcon>
            </View>
        );
    }
}
