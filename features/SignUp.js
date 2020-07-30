import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import SignIn from "./SignIn";
function SignUp(props) {
    const [firstTime, setFirstTime] = React.useState(true);
    if (firstTime) {
        return (
            <View style={styles.container}>
                <View style={styles.donDuSang1Stack}>
                    <Text style={styles.donDuSang1}>Don du sang</Text>
                    <Image
                        source={require("../assets/images/don_sang_logo.png")}
                        resizeMode="contain"
                        style={styles.image1}
                    ></Image>
                </View>
                <MaterialUnderlineTextbox
                    style={styles.materialUnderlineTextbox1}
                ></MaterialUnderlineTextbox>
                <MaterialRightIconTextbox
                    style={styles.materialRightIconTextbox1}
                ></MaterialRightIconTextbox>
                <MaterialUnderlineTextbox1
                    style={styles.materialUnderlineTextbox1}
                ></MaterialUnderlineTextbox1>
                <MaterialUnderlineTextbox2
                    style={styles.materialUnderlineTextbox2}
                ></MaterialUnderlineTextbox2>
                <MaterialButtonPrimary
                    style={styles.materialButtonPrimary}
                ></MaterialButtonPrimary>
                <Text style={{ left: 115, position: "relative", top: 20 }} onPress={() => setFirstTime(false)}>Vous avez un compte ?</Text>

            </View>
        );
    } else {
        return <SignIn />
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    donDuSang1: {
        top: 0,
        position: "absolute",
        fontFamily: "alegreya-sc-700",
        color: "#121212",
        height: 46,
        width: 141,
        fontSize: 22,
        left: 5
    },
    image1: {
        top: 42,
        left: 0,
        width: 142,
        height: 112,
        position: "absolute"
    },
    donDuSang1Stack: {
        width: 146,
        height: 154,
        marginTop: 86,
        marginLeft: 112
    },
    materialUnderlineTextbox1: {
        height: 43,
        width: 265,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 20,
        marginLeft: 55
    },
    materialRightIconTextbox1: {
        width: 265,
        height: 43,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 20,
        marginLeft: 55
    },
    materialUnderlineTextbox2: {
        height: 43,
        width: 265,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 20,
        marginLeft: 55
    },
    materialButtonPrimary: {
        height: 36,
        width: 100,
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
        marginTop: 20,
        marginLeft: 133
    }
});

export default SignUp;
