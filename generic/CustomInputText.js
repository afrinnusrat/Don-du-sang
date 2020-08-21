import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CustomInputText(props) {
    const [isPassword, setIsPassword] = React.useState(props.isPassword);
    return (
        <View style={[styles.container, props.style]}>
            <TextInput placeholder={props.placeholder} secureTextEntry={isPassword} style={styles.textInput} onChangeText={props.onChangeText}></TextInput>
            {props.withIcon && <Icon onPress={() =>setIsPassword(!isPassword)} name={props.iconName || "eye"} style={styles.iconStyle}></Icon>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: "rgba(131,11,220,1)",
        //backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0
    },
    textInput: {
        color: "#000",
        paddingRight: 16,
        fontSize: 16,
        alignSelf: "stretch",
        flex: 1,
        lineHeight: 16,
        paddingTop: 14,
        paddingBottom: 8,
        width: 367,
        height: 42,
        margin: 0
    },
    iconStyle: {
        color: "#616161",
        fontSize: 24,
        paddingRight: 8,
        margin: 0
    }
});

export default CustomInputText;
