import React from "react";
import { View, Image, Text } from "react-native";

//
import CustomButton from "../../generic/CustomButton";
import CustomBtnIcon from "../../generic/CustomBtnIcon";

import lightStyles from "./styles/lightMode";
import darkStyles from "./styles/darkMode";

import "../../i18n";
import { useTranslation } from "react-i18next";
import IconAwesome from "react-native-vector-icons/FontAwesome";

//
function App({ navigation, state, dispatch }) {

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
    React.useEffect(() => {
        //console.log(state);
        let isMounted = true;
        return () => isMounted = false;
    });
    return (
        <View style={styles.container}>
            <CustomBtnIcon iconName="language" fontAwesome={true} style={styles.languageIcon} action={() => { changeLanguage('ar') }} />
            <CustomBtnIcon iconName="theme-light-dark" style={styles.lightDarkSwitch} action={swichLight} />
            
            <Image
                source={imageModes.background}
                resizeMode="stretch"
                style={{
                    left: 0,
                    width: 375,
                    height: 300,
                    position: "absolute",
                    top: 120
                }}
            ></Image>
            <Image
                source={imageModes.logo}
                resizeMode="cover"
                style={styles.image}
            ></Image>
            <CustomButton style={styles.googleSignUp} text={/*t("signIn_title")*/"Continuer avec Google"} action={() => {
                //navigation.navigate('SignInScreen');
            }} >
                <IconAwesome name="google-plus-square" style={{ color: 'white', fontSize: 25, position: "absolute", right: 20 }} />
            </CustomButton>
            <CustomButton style={styles.facebookSignUp} text={/*t("signUp_title")*/"Continuer avec Facebook"} action={() => {
                //navigation.navigate('SignUpScreen');
            }}>
                <IconAwesome name="facebook-square" style={{ color: 'white', fontSize: 25, position: "absolute", right: 17 }} />
            </CustomButton>
            <Text style={{marginTop:5}}>Ou</Text>
            <CustomButton style={styles.profileSignUp} text={/*t("signUp_title")*/"Créer votre profil"} action={() => {
                navigation.navigate('SignUpScreen');
            }}>
                <IconAwesome name="user-circle-o" style={{ color: 'white', fontSize: 25, position: "absolute", right: 17 }} />
            </CustomButton>
            <Text style={{ marginTop: 15 }}>Vous avez déjà un compte ? <Text style={{ color: "#C3041E", fontWeight: "bold" }} onPress={() => navigation.navigate('SignInScreen')}>Se connecter</Text></Text>
            <CustomBtnIcon iconName="share" style={styles.homeBtn} action={() => { }} />
            <CustomBtnIcon iconName="star" style={styles.starIcon} action={() => { }} />
            <CustomBtnIcon iconName="human-greeting" style={styles.humanGreetingIcon} action={() => { }} />
            <CustomBtnIcon iconName="question" fontAwesome={true} style={styles.questionIcon} action={() => { }} />
        </View>
    );
}

export default App;
