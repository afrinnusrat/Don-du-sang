import React from "react";
import { View, Image } from "react-native";

//
import CustomButton from "../../generic/CustomButton";
import CustomBtnIcon from "../../generic/CustomBtnIcon";

import lightStyles from "./styles/lightMode";
import darkStyles from "./styles/darkMode";
//
//import Dashboard from "../dashboard";
/** 
 * 
 */
import "../../i18n";
import { useTranslation } from "react-i18next";
//
function App({ navigation,state,dispatch }) {

    //
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
    const swichLight = () => {
        if (styles === lightStyles) {
            setStyles(darkStyles);
            setImageModes({ logo: require("../../assets/images/logo_lightMode.png"), background: require("../../assets/images/blood_donation_background_dark.png") })
        } else {
            setStyles(lightStyles);
            setImageModes({ logo: require("../../assets/images/blood_donation.png"), background: require("../../assets/images/blood_donation_background.png") })
        }
    }
    React.useEffect(()=>{
        console.log(state)
    })
    return (
        <View style={styles.container}>
            <CustomBtnIcon iconName="language" fontAwesome={true} style={styles.languageIcon} action={() => { changeLanguage('ar') }} />
            <CustomBtnIcon iconName="theme-light-dark" style={styles.lightDarkSwitch} action={swichLight} />
            <Image
                source={imageModes.logo}
                resizeMode="cover"
                style={styles.image}
            ></Image>
            <Image
                source={imageModes.background}
                resizeMode="stretch"
                style={{
                    left: 0,
                    width: 375,
                    height: 322,
                    position: "absolute",
                    top: 150
                }}
            ></Image>
            <CustomButton style={styles.signInClass} text={t("signIn_title")} action={() => {
                navigation.navigate('SignInScreen');
            }} ></CustomButton>
            <CustomButton style={styles.signUpClass} text={t("signUp_title")} action={() => {
                navigation.navigate('SignUpScreen');
            }}></CustomButton>
            <CustomBtnIcon iconName="share" style={styles.homeBtn} action={() => { }} />
            <CustomBtnIcon iconName="star" style={styles.starIcon} action={() => { }} />
            <CustomBtnIcon iconName="human-greeting" style={styles.humanGreetingIcon} action={() => { }} />
            <CustomBtnIcon iconName="question" fontAwesome={true} style={styles.questionIcon} action={() => { }} />
        </View>
    );
}

export default App;
