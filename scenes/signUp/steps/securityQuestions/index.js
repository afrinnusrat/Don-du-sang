import React from "react";
import { View } from "react-native";
import { Picker } from '@react-native-community/picker';
import CustomInputText from "../../../../generic/CustomInputText";

export default (props) => {
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
                    <Picker.Item label="Quel est votre chanteur préféré ?" value="Quel est votre chanteur préféré ?" />
                    <Picker.Item label="Votre prochaine destination ?" value="Votre prochaine destination ?" />
                    <Picker.Item label="Le nom de votre meilleur ami ?" value="Le nom de votre meilleur ami ?" />
                    <Picker.Item label="Votre nickname ?" value="Votre nickname ?" />
                    <Picker.Item label="Votre animal préféré ?" value="Votre animal préféré ?" />
                    <Picker.Item label="La personalité modèle pour vous ?" value="La personalité modèle pour vous ?" />
                </Picker>
            </View>
            <CustomInputText style={props.styles.response1} onChangeText={props.onChangeResponse} placeholder="Réponse .."></CustomInputText>
        </View>
    )
}