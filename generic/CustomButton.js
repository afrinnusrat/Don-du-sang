import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CustomButton(props) {
    return (
        <TouchableOpacity style={[styles.container, props.style]} onPress={props.action}>
            {props.icon &&<Icon name={props.iconName} style={styles.icon}></Icon>}
            {!props.icon && <Text style={styles.confirmer}>{props.text}</Text>}
            {props.children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2196F3",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        minWidth: 88,
        paddingLeft: 16,
        paddingRight: 16
    },
    confirmer: {
        color: "white",
        fontSize: 16,
        fontWeight:"bold"
    }
});

export default CustomButton;
