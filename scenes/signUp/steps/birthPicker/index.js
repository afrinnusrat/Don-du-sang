import React from "react";
import DatePicker from 'react-native-date-picker'
import { View } from "react-native";
import CustomButton from "../../../../generic/CustomButton";
import CustomBtnIcon from "../../../../generic/CustomBtnIcon";
import lightStyles from "./styles/lightStyles";
import darkStyles from "./styles/darkStyles";
import SecurityQuestions from "../securityQuestions";
export default function BirthPicker(props) {
    const [styles, setStyles] = React.useState(lightStyles);
    const [imageModes, setImageModes] = React.useState({
        logo: require("../../../../assets/images/blood_donation.png"),
        background: require("../../../../assets/images/blood_donation_background.png")
    })
    const swichLight = () => {
        if (styles === lightStyles) {
            setStyles(darkStyles);
            setImageModes({ logo: require("../../../../assets/images/logo_lightMode.png"), background: require("../../../../assets/images/blood_donation_background_dark.png") })
        } else {
            setStyles(lightStyles);
            setImageModes({ logo: require("../../../../assets/images/blood_donation.png"), background: require("../../../../assets/images/blood_donation_background.png") })
        }
    }
    return (
        <View style={styles.container}>
            <CustomBtnIcon iconName="language" fontAwesome={true} style={styles.languageIcon} action={() => { }} />
            <CustomBtnIcon iconName="theme-light-dark" style={styles.lightDarkSwitch} action={swichLight} />
            <View style={{ marginTop: "50%", alignItems: "center" }}>
                <DatePicker
                    date={props.birthDate}
                    onDateChange={props.onChangeBirthDate}
                    mode="date"
                />
                <SecurityQuestions styles={styles} onChangeQuestion={props.onChangeQuestion} securityQuestions={props.securityQuestions} onChangeResponse={props.onChangeResponse} />
                <CustomButton text="Terminer" style={{
                    height: 36,
                    width: 265,
                    borderRadius: 13,
                    shadowColor: "rgba(0,0,0,1)",
                    shadowOffset: {
                        width: 3,
                        height: 3
                    },
                    elevation: 5,
                    shadowOpacity: 0.66,
                    shadowRadius: 0,
                    backgroundColor: "rgba(66,70,139,1)",
                    marginTop: "5%",
                }} action={() => alert(props.birthDate)} />
            </View>
            <CustomBtnIcon style={styles.homeBtn} iconName="home" action={() => props.navigation.navigate('Home')}></CustomBtnIcon>
        </View>
    )
}
