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
import Config from "../../env.json";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import {Icon} from "native-base";

export default function SignIn({ navigation, state, dispatch }) {
    const [userInfos, setUserInfos] = React.useState({ login: "", password: "" });
    const [isLoading, setIsLoading] = React.useState(false);
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
        } else if (i18n.language === "en") {
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
    const connexion = async () => {
        // gotta add axios here
        setIsLoading(true);
        if (Config.ngrok_start) {
            axios.get("http://localhost:2020/user/", {}, {})
                .then(res => { })
                .catch(ex => { })
        } else {
            if (userInfos.login === "Tomas" && userInfos.password === "aaa") {
                setTimeout(() => {
                    setIsLoading(false);
                    Toast.show({
                        type: "success",
                        position: "top",
                        text1: t("signIn_confirm_success_title"),
                        text2: t("signIn_confirm_success_message") + userInfos.login ,
                        visibilityTime: 1000,
                        autoHide: true,
                        topOffset: 30,
                        bottomOffset: 40,
                        onShow: () => { },
                        onHide: () => { }
                    });
                    // await AsyncStorage.setItem("loggedUser", JSON.stringify({ login: userInfos.login, password: userInfos.password }));
                }, 2000)
                setTimeout(()=>{
                    dispatch({ type: "AUTH", user: { ...state.user, login: userInfos.login, password: userInfos.password } })
                    navigation.navigate("Home")
                },2500)
            } else {
                setTimeout(() => {
                    setIsLoading(false);
                    Toast.show({
                        type: "error",
                        position: "top",
                        text1: t("signIn_confirm_error_title"),
                        text2: t("signIn_confirm_error_message"),
                        visibilityTime: 1000,
                        autoHide: true,
                        topOffset: 30,
                        bottomOffset: 40,
                        onShow: () => { },
                        onHide: () => { }
                    });
                }, 2000)
            }
        }
        //
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
                <CustomBtnIcon iconName="language" fontAwesome={true} style={styles.languageIcon} action={() => { changeLanguage('ar') }} />
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
                <Spinner
                    visible={isLoading}
                    textContent={t("loading")}
                    textStyle={{ color: '#FFF' }}
                />
                <CustomInputText style={styles.loginInput} placeholder={t("signIn_login")} withIcon={false} onChangeText={onChangeLogin}></CustomInputText>
                <CustomInputText style={styles.passwordInput} isPassword placeholder={t("signIn_password")} withIcon={true} onChangeText={onChangePsswd}></CustomInputText>
                <CustomButton action={connexion} text={t("signIn_confirmBtn")} style={styles.confirmBtn}><Icon style={{position:"absolute",right:15,color:"white"}} name="log-in" type="Feather"  /></CustomButton>
                <Text style={{ position: "relative", top: 15, marginRight: 140 }} onPress={() => {
                    navigation.navigate('SignUpScreen');
                }}>{t("signIn_link1")}</Text>
                <Text style={{ position: "relative", top: -4, marginLeft: 140, color: "black" }} onPress={() => {
                    //navigation.navigate('ForgotPasswordScreen');
                }}>{t("signIn_link2")}</Text>
            </View>
            <CustomBtnIcon style={styles.homeBtn} iconName="home" action={() => navigation.navigate('Home')}></CustomBtnIcon>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    );
}
