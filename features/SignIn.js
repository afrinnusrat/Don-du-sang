import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialUnderlineTextbox3 from "../components/MaterialUnderlineTextbox3";
import SignUp from "./SignUp";
function SignIn(props) {
    const [firstTime,setFirstTime]=React.useState(false);
    if(firstTime){
        return <SignUp />
    }else{
        return (
            <View style={styles.container}>
                <MaterialButtonViolet
                    style={styles.materialButtonViolet}
                ></MaterialButtonViolet>
                <Text style={{ left: 135, position: "relative", top: 20 }} onPress={() => setFirstTime(true)}>Pas de compte ?</Text>
                <MaterialButtonShare
                    style={styles.materialButtonShare}
                ></MaterialButtonShare>
                <View style={styles.donDuSang1Stack}>
                    <Text style={styles.donDuSang1}>Don du sang</Text>
                    <Image
                        source={require("../assets/images/don_sang_logo.png")}
                        resizeMode="contain"
                        style={styles.image}
                    ></Image>
                </View>
                <MaterialRightIconTextbox
                    style={styles.materialRightIconTextbox1}
                ></MaterialRightIconTextbox>
                <MaterialUnderlineTextbox3
                    style={styles.materialUnderlineTextbox3}
                ></MaterialUnderlineTextbox3>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    materialButtonViolet: {
        height: 48,
        width: 150,
        backgroundColor: "rgba(65,80,123,1)",
        borderWidth: 0,
        borderColor: "#000000",
        borderRadius: 16,
        marginTop: 462,
        marginLeft: 112
    },
    materialButtonShare: {
        height: 56,
        width: 56,
        backgroundColor: "rgba(68,76,137,1)",
        marginTop: 98,
        marginLeft: 160
    },
    donDuSang1: {
        top: 0,
        position: "absolute",
        fontFamily: "alegreya-sc-700",
        color: "#121212",
        height: 46,
        width: 141,
        fontSize: 22,
        left: 17
    },
    image: {
        top: 34,
        left: 0,
        width: 175,
        height: 166,
        position: "absolute"
    },
    donDuSang1Stack: {
        width: 175,
        height: 200,
        marginTop: -578,
        marginLeft: 100
    },
    materialRightIconTextbox1: {
        width: 265,
        height: 43,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 99,
        marginLeft: 55
    },
    materialUnderlineTextbox3: {
        height: 43,
        width: 265,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: -112,
        marginLeft: 55
    }
});

export default SignIn;
