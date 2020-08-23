import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Toast } from "native-base";
//
import CustomButton from "../../generic/CustomButton";
import CustomInputText from "../../generic/CustomInputText";
import CustomBtnIcon from "../../generic/CustomBtnIcon";
//
import lightStyles from "./styles/lightStyles";
import darkStyles from "./styles/darkStyles"

export default function SignIn({ navigation }) {
    const [userInfos, setUserInfos] = React.useState({ login: "", password: "" });
    const [styles, setStyles] = React.useState(lightStyles);
    const [imageModes, setImageModes] = React.useState({
        logo: require("../../assets/images/blood_donation.png"),
        background: require("../../assets/images/blood_donation_background.png")
    })
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
            alert("welcome")
        } else {
            alert("une mauvaise saisie")
        }
    }
    const swichLight = () => {
        if (styles === lightStyles) {
            setStyles(darkStyles);
            setImageModes({ logo: require("../../assets/images/logo_lightMode.png"), background: require("../../assets/images/blood_donation_background_dark.png") })
        } else {
            setStyles(lightStyles);
            setImageModes({ logo: require("../../assets/images/blood_donation.png"), background: require("../../assets/images/blood_donation_background.png") })
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.sloganContainer}>
                <CustomBtnIcon iconName="language" fontAwesome={true} style={styles.languageIcon} action={() => { }} />
                <CustomBtnIcon iconName="theme-light-dark" style={styles.lightDarkSwitch} action={swichLight} />
                <Image
                    source={imageModes.logo}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
                <Image
                    source={imageModes.background}
                    resizeMode="stretch"
                    style={{
                        left: -100,
                        width: 375,
                        height: 379,
                        position: "absolute",
                        top: 50
                    }}
                ></Image>
            </View>
            <View style={styles.formContainer}>
                <CustomInputText style={styles.loginInput} placeholder="Login :" withIcon={false} onChangeText={onChangeLogin}></CustomInputText>
                <CustomInputText style={styles.passwordInput} isPassword placeholder="Mot de passe :" withIcon={true} onChangeText={onChangePsswd}></CustomInputText>
                <CustomButton action={connexion} text="Confirmer" style={styles.confirmBtn}></CustomButton>
                <Text style={{ position: "relative", top: 15, marginRight: 140 }} onPress={() => {
                    navigation.navigate('SignUpScreen');
                }}>Pas de compte ?</Text>
                <Text style={{ position: "relative", top: -4, marginLeft: 140, color: "black" }} onPress={() => {
                    //navigation.navigate('ForgotPasswordScreen');
                }}>Oublié le mot de passe ?</Text>
            </View>
            <CustomBtnIcon style={styles.homeBtn} iconName="home" action={()=>navigation.navigate('Home')}></CustomBtnIcon>

        </View>
    );
}
