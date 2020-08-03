import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import SignUp from "../signUp/SignUp";
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
        if (userInfos.login === "Tomas" && userInfos.password === "aaa") {
            alert("Bienvenue !!");
        } else {
            alert("Une Mauvaise Saisie");
        }
    }
    if (firstTime) {
        return <SignUp />
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.donDuSang1Stack}>
                    <Text style={styles.donDuSang1}>Don du sang</Text>
                    <Image
                        source={require("../../assets/images/don_sang_logo.png")}
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
