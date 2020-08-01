import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import SignUp from "./SignUp";
function SignIn(props) {
    const [firstTime, setFirstTime] = React.useState(false);
    const [userInfos, setUserInfos] = React.useState({ login: "", password: "" })
    if (firstTime) {
        return <SignUp />
    } else {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{
                        top: 55,
                        position: "absolute",
                        fontFamily: "alegreya-sc-700",
                        color: "#121212",
                        height: 46,
                        width: 141,
                        fontSize: 22,
                    }}>Don du sang</Text>
                    <Image
                        source={require("../assets/images/don_sang_logo.png")}
                        resizeMode="contain"
                        style={{
                            top: 150,
                            width: 175,
                            height: 166,
                            position: "absolute"
                        }}
                    ></Image>
                    <View style={{
                        borderBottomWidth: 1,
                        borderColor: "#D9D5DC",
                        backgroundColor: "transparent",
                        flexDirection: "row",
                        alignItems: "center",
                        position: "absolute",
                        height: 43,
                        width: 265,
                        borderWidth: 1,
                        borderColor: "#000000",
                        borderRadius: 12,
                        marginTop: 350,
                    }}>
                        <TextInput placeholder="Login :" style={{
                            color: "#000",
                            paddingRight: 5,
                            fontSize: 16,
                            alignSelf: "stretch",
                            flex: 1,
                            lineHeight: 16,
                            paddingTop: 16,
                            paddingBottom: 8
                        }}></TextInput>
                    </View>
                    <View style={{
                        borderColor: "rgba(131,11,220,1)",
                        backgroundColor: "transparent",
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 0,
                        position: "absolute",
                        width: 265,
                        height: 43,
                        borderWidth: 1,
                        borderColor: "#000000",
                        borderRadius: 12,
                        marginTop: 400,
                        //marginLeft: 55
                    }}>
                        <TextInput placeholder="Password" style={{
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
                        }}></TextInput>
                        <Icon name="eye" style={{
                            color: "#616161",
                            fontSize: 24,
                            paddingRight: 8,
                            margin: 0
                        }}></Icon>
                    </View>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: "rgba(68,76,137,1)",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    borderRadius: 2,
                    shadowColor: "#000",
                    height: 48,
                    width: 150,
                    borderRadius: 16,
                    shadowRadius: 5,
                    marginTop: 462,
                    marginLeft: 112
                }}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 14,
                    }}>Confirmer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: "#3F51B5",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 28,
                    shadowColor: "#111",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.2,
                    elevation: 2,
                    minWidth: 40,
                    minHeight: 40,

                    height: 56,
                    width: 56,
                    backgroundColor: "rgba(68,76,137,1)",
                    marginTop: 60,
                    marginLeft: 160
                }}>
                    <Icon name="share" style={{
                        color: "#fff",
                        fontSize: 24,
                        alignSelf: "center"
                    }}></Icon>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SignIn;
