import React from "react";
import { View, Image } from "react-native";
import { Picker } from '@react-native-community/picker';
import CustomInputText from "../../../../generic/CustomInputText";
import "../../../../i18n";
import { useTranslation } from "react-i18next";
import lightStyles from "./styles/lightStyles";
import darkStyles from "./styles/darkStyles";
import CustomButton from "../../../../generic/CustomButton";
import CustomBtnIcon from "../../../../generic/CustomBtnIcon";
export default (props) => {
    const [styles, setStyles] = React.useState(lightStyles);
    const [imageModes, setImageModes] = React.useState({
        logo: require("../../../../assets/images/blood_donation.png"),
        background: require("../../../../assets/images/blood_donation_background.png")
    });
    // i18n injection
    const { t, i18n } = useTranslation();
    //
    const changeLanguage = (lng) => {
        if (i18n.language === "fr") {
            i18n.changeLanguage("en");
        } else if (i18n.language === "ar") {
            i18n.changeLanguage("fr");
        } else if (i18n.language === "en") {
            i18n.changeLanguage("ar");
        }
    };
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
            <CustomBtnIcon iconName="language" fontAwesome={true} style={styles.languageIcon} action={() => { changeLanguage('ar') }} />
            <CustomBtnIcon iconName="theme-light-dark" style={styles.lightDarkSwitch} action={swichLight} />
            <Image
                source={imageModes.logo}
                resizeMode="stretch"
                style={styles.logo}
            ></Image>
            <Image
                source={imageModes.background}
                resizeMode="stretch"
                style={{
                    right: 0,
                    width: 375,
                    height: 370,
                    position: "absolute",
                    top: 150
                }}
            ></Image>
            <View style={styles.formContainer}>
                <View>
                    <View style={styles.questionPicker}>
                        <Picker
                            mode="dropdown"
                            prompt="Question 1"
                            selectedValue={props.securityQuestions.question1}
                            style={{ width: 265, marginTop: -5 }}
                            onValueChange={(text) => props.onChangeQuestion(text, 1)}
                        >
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[0]} value={t("signUp_questions", { returnObjects: true })[0]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[1]} value={t("signUp_questions", { returnObjects: true })[1]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[2]} value={t("signUp_questions", { returnObjects: true })[2]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[3]} value={t("signUp_questions", { returnObjects: true })[3]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[4]} value={t("signUp_questions", { returnObjects: true })[4]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[5]} value={t("signUp_questions", { returnObjects: true })[5]} />
                        </Picker>
                    </View>
                    <CustomInputText style={styles.response1} onChangeText={props.onChangeResponse} placeholder={t("answer")}></CustomInputText>
                </View>
                <View>
                    <View style={styles.questionPicker}>
                        <Picker
                            mode="dropdown"
                            prompt="Question 2"
                            selectedValue={props.securityQuestions.question2}
                            style={{ width: 265, marginTop: -5 }}
                            onValueChange={(text) => props.onChangeQuestion(text, 2)}
                        >
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[0]} value={t("signUp_questions", { returnObjects: true })[0]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[1]} value={t("signUp_questions", { returnObjects: true })[1]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[2]} value={t("signUp_questions", { returnObjects: true })[2]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[3]} value={t("signUp_questions", { returnObjects: true })[3]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[4]} value={t("signUp_questions", { returnObjects: true })[4]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[5]} value={t("signUp_questions", { returnObjects: true })[5]} />
                        </Picker>
                    </View>
                    <CustomInputText style={styles.response1} onChangeText={props.onChangeResponse} placeholder={t("answer")}></CustomInputText>
                </View>
                <View>
                    <View style={styles.questionPicker}>
                        <Picker
                            mode="dropdown"
                            prompt="Question 3"
                            selectedValue={props.securityQuestions.question3}
                            style={{ width: 265, marginTop: -5 }}
                            onValueChange={(text) => props.onChangeQuestion(text, 3)}
                        >
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[0]} value={t("signUp_questions", { returnObjects: true })[0]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[1]} value={t("signUp_questions", { returnObjects: true })[1]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[2]} value={t("signUp_questions", { returnObjects: true })[2]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[3]} value={t("signUp_questions", { returnObjects: true })[3]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[4]} value={t("signUp_questions", { returnObjects: true })[4]} />
                            <Picker.Item label={t("signUp_questions", { returnObjects: true })[5]} value={t("signUp_questions", { returnObjects: true })[5]} />
                        </Picker>
                    </View>
                    <CustomInputText style={styles.response1} onChangeText={props.onChangeResponse} placeholder={t("answer")}></CustomInputText>
                </View>
                <CustomButton text={t("signUp_finishBtn")} style={styles.confirmBtn} action={props.action} />
                <CustomButton text={t("skip")} style={styles.confirmBtn} action={() => { props.navigation.navigate("DashboardScreen") }} />
            </View>
            <CustomBtnIcon style={styles.homeBtn} iconName="home" action={() => props.navigation.navigate('Home')}></CustomBtnIcon>
        </View>
    )
}