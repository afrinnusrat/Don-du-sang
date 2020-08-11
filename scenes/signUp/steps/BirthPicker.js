import React from "react";
import DatePicker from 'react-native-date-picker'
import { View } from "react-native";
import CustomButton from "../../../generic/CustomButton";
export default function BirthPicker(props) {
    return (
        <View style={{ alignItems: "center", flex: 1, backgroundColor: "white", marginTop: "50%" }}>
            <DatePicker
                date={props.birthDate}
                onDateChange={props.onChangeBirthDate}
                mode="date"
            />
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
                marginTop: "25%",
            }} action={() => alert(props.birthDate)} />
        </View>
    )
}
