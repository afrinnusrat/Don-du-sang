import React from "react";
import { View, Image } from "react-native";

//
import CustomButton from "../../generic/CustomButton";
import CustomBtnIcon from "../../generic/CustomBtnIcon";

import lightStyles from "./styles/lightMode";
import darkStyles from "./styles/darkMode";
//

function App({ navigation }) {
    const [styles, setStyles] = React.useState(lightStyles);
    const [imageModes, setImageModes] = React.useState({
        logo: require("../../assets/images/blood_donation.png"),
        background: require("../../assets/images/blood_donation_background.png")
    })
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
            <CustomBtnIcon iconName="language" fontAwesome={true} style={styles.languageIcon} action={() => { }} />
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
            <CustomButton style={styles.signInClass} text="Se connecter" action={() => {
                navigation.navigate('SignInScreen');
                //setToLogin(true)
            }} ></CustomButton>
            <CustomButton style={styles.signUpClass} text="S'inscrire" action={() => {
                navigation.navigate('SignUpScreen');
                //setToSignUp(true)
            }}></CustomButton>
            <CustomBtnIcon iconName="share" style={styles.homeBtn} action={() => { }} />
            <CustomBtnIcon iconName="star" style={styles.starIcon} action={() => { }} />
            <CustomBtnIcon iconName="human-greeting" style={styles.humanGreetingIcon} action={() => { }} />
            <CustomBtnIcon iconName="question" fontAwesome={true} style={styles.questionIcon} action={()=>{}} />
        </View>
    );
}


export default App;
