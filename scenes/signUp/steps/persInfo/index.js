import React from "react";
import { View, Text, Image } from "react-native";
import { Picker } from '@react-native-community/picker';

//
import CustomInputText from "../../../../generic/CustomInputText";
import CustomButton from "../../../../generic/CustomButton";
import CustomBtnIcon from "../../../../generic/CustomBtnIcon";

//
import lightStyles from "./styles/lightStyles";
import darkStyles from "./styles/darkStyles";
import "../../../../i18n";
import { useTranslation } from "react-i18next";

function PersInfo(props) {
    const [styles, setStyles] = React.useState(lightStyles);
    const [imageModes, setImageModes] = React.useState({
        logo: require("../../../../assets/images/blood_donation.png"),
        background: require("../../../../assets/images/blood_donation_background.png")
    });
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
            <CustomBtnIcon iconName="language" fontAwesome={true} style={styles.languageIcon} action={() => { changeLanguage("ar") }} />
            <CustomBtnIcon iconName="theme-light-dark" style={styles.lightDarkSwitch} action={swichLight} />
            <Image
                source={imageModes.logo}
                resizeMode="contain"
                style={styles.image1}
            ></Image>
            <Image
                source={imageModes.background}
                resizeMode="stretch"
                style={{
                    right: 0,
                    width: 375,
                    height: 370,
                    position: "absolute",
                    top: 120
                }}
            ></Image>
            <View style={styles.formContainer}>
                <CustomInputText style={styles.nameClass} onChangeText={props.onChangeLName} placeholder={t("signUp_lname")}></CustomInputText>
                <CustomInputText style={styles.nameClass} onChangeText={props.onChangeFName} placeholder={t("signUp_fname")}></CustomInputText>
                <View style={{
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    flexDirection: 'row'
                }}>
                    <View style={styles.genderPicker}>
                        <Picker
                            mode="dropdown"
                            prompt="Genre"
                            selectedValue={props.user.gender}
                            style={{ width: 130, marginTop: -5, flexDirection: 'column', }}
                            onValueChange={props.onChangeGender}
                        >
                            <Picker.Item label={t("gender_male")} value={t("gender_male")} />
                            <Picker.Item label={t("gender_female")} value={t("gender_female")} />
                        </Picker>
                    </View>
                    <View style={styles.genderPicker}>
                        <Picker
                            mode="dropdown"
                            prompt="Groupe sanguin"
                            selectedValue={props.user.bloodGroup}
                            style={{ width: 130, marginTop: -5, flexDirection: 'column', }}
                            onValueChange={props.onChangeBloodGroup}
                        >
                            <Picker.Item label="O+" value="O+" /><Picker.Item label="O-" value="O-" />
                            <Picker.Item label="B+" value="B+" /><Picker.Item label="B-" value="B-" />
                            <Picker.Item label="A+" value="A+" /><Picker.Item label="A-" value="A-" />
                            <Picker.Item label="AB+" value="AB+" /><Picker.Item label="AB-" value="AB-" />
                        </Picker>
                    </View>
                </View>
                <CustomInputText style={styles.psswdClass} onChangeText={props.onChangePassword} isPassword placeholder={t("signUp_password")} withIcon></CustomInputText>
                <CustomInputText style={styles.phoneClass} onChangeText={props.onChangePhoneNumber} placeholder={t("signUp_phone")}></CustomInputText>
                <CustomButton text={t("signUp_confirmBtn")} style={styles.confirmClass} action={props.action }></CustomButton>
                <Text style={{ position: "relative", top: 20 }} onPress={() => {
                    props.navigation.navigate('SignInScreen');
                }}>{t("signUp_link1")}</Text>
            </View>
            <CustomBtnIcon style={styles.homeBtn} iconName="home" action={()=>props.navigation.navigate('Home')} ></CustomBtnIcon>

        </View>
    );
}


export default PersInfo;
