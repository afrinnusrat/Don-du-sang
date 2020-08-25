import React from "react";
import { View } from "react-native";
import { Picker } from '@react-native-community/picker';
import CustomInputText from "../../../../generic/CustomInputText";
import "../../../../i18n";
import { useTranslation } from "react-i18next";
export default (props) => {
    // i18n injection
    const { t } = useTranslation();

    //
    return (
        <View>
            <View style={props.styles.questionPicker}>
                <Picker
                    mode="dropdown"
                    prompt="Question 1"
                    selectedValue={props.securityQuestions.question1}
                    style={{ width: 265, marginTop: -5 }}
                    onValueChange={props.onChangeQuestion}
                >
                    <Picker.Item label={t("signUp_questions", { returnObjects: true })[0]} value={t("signUp_questions", { returnObjects: true })[0]} />
                    <Picker.Item label={t("signUp_questions", { returnObjects: true })[1]} value={t("signUp_questions", { returnObjects: true })[1]} />
                    <Picker.Item label={t("signUp_questions", { returnObjects: true })[2]} value={t("signUp_questions", { returnObjects: true })[2]} />
                    <Picker.Item label={t("signUp_questions", { returnObjects: true })[3]} value={t("signUp_questions", { returnObjects: true })[3]} />
                    <Picker.Item label={t("signUp_questions", { returnObjects: true })[4]} value={t("signUp_questions", { returnObjects: true })[4]} />
                    <Picker.Item label={t("signUp_questions", { returnObjects: true })[5]} value={t("signUp_questions", { returnObjects: true })[5]} />
                </Picker>
            </View>
            <CustomInputText style={props.styles.response1} onChangeText={props.onChangeResponse} placeholder={t("answer")}></CustomInputText>
        </View>
    )
}