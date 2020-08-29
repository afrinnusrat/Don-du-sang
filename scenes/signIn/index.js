import React, { Component } from "react";
import { View, Text, Image } from "react-native";
//
import CustomButton from "../../generic/CustomButton";
import CustomInputText from "../../generic/CustomInputText";
import CustomBtnIcon from "../../generic/CustomBtnIcon";
//
import lightStyles from "./styles/lightStyles";
import darkStyles from "./styles/darkStyles";
import "../../i18n";
import { useTranslation } from "react-i18next";
import Toast from 'react-native-toast-message'

export default function SignIn({ navigation }) {
    const [userInfos, setUserInfos] = React.useState({ login: "", password: "" });
    const [styles, setStyles] = React.useState(lightStyles);
    const [imageModes, setImageModes] = React.useState({
        logo: require("../../assets/images/blood_donation.png"),
        background: require("../../assets/images/blood_donation_background.png")
    })
    // i18n injection
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        if (i18n.language === "fr") {
            i18n.changeLanguage("en");
        } else if (i18n.language === "ar") {
            i18n.changeLanguage("fr");
        }else if(i18n.language==="en"){
            i18n.changeLanguage("ar");
        }
    };
    //
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
                type: "success",
                position: "top",
                text1: "Welcome",
                text2: "Bienvenue "+userInfos.login+" 👋",
                visibilityTime: 1000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
                onShow: () => {},
                onHide: () => {}
              });
        } else {
            Toast.show({
                type: "error",
                position: "top",
                text1: "Désolé",
                text2: "Une mauvaise saisie ",
                visibilityTime: 1000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
                onShow: () => {},
                onHide: () => {}
              });
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
                <CustomBtnIcon iconName="language" fontAwesome={true} style={styles.languageIcon} action={() => {changeLanguage('ar') }} />
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
                <CustomInputText style={styles.loginInput} placeholder={t("signIn_login")} withIcon={false} onChangeText={onChangeLogin}></CustomInputText>
                <CustomInputText style={styles.passwordInput} isPassword placeholder={t("signIn_password")} withIcon={true} onChangeText={onChangePsswd}></CustomInputText>
                <CustomButton action={connexion} text={t("signIn_confirmBtn")} style={styles.confirmBtn}></CustomButton>
                <Text style={{ position: "relative", top: 15, marginRight: 140 }} onPress={() => {
                    navigation.navigate('SignUpScreen');
                }}>{t("signIn_link1")}</Text>
                <Text style={{ position: "relative", top: -4, marginLeft: 140, color: "black" }} onPress={() => {
                    //navigation.navigate('ForgotPasswordScreen');
                }}>{t("signIn_link2")}</Text>
            </View>
            <CustomBtnIcon style={styles.homeBtn} iconName="home" action={()=>navigation.navigate('Home')}></CustomBtnIcon>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    );
}
