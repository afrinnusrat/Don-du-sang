import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SignIn from "../signIn/SignIn";
//
import CustomInputText from "../../generic/CustomInputText";
import CustomButton from "../../generic/CustomButton";
import CustomBtnIcon from "../../generic/CustomBtnIcon";
//
import styles from "./styling"
function SignUp() {
    const [firstTime, setFirstTime] = React.useState(true);
    const [user,setUser]=React.useState({
        firstName:"",lastName:"",password:"",birthDate:"",phoneNumber:""
    });
    const onChangeFName=(text)=>setUser({...user,firstName:text});
    const onChangeLName=(text)=>setUser({...user,lastName:text});
    const onChangePassword=(text)=>setUser({...user,password:text});
    const onChangeBirthDate=(text)=>setUser({...user,birthDate:text});
    const onChangePhoneNumber=(text)=>setUser({...user,phoneNumber:text});
    const createUser=()=>{
        alert("Merci de nous rejoindre "+user.firstName);
    }
    if (firstTime) {
        return (
            <View style={styles.container}>
                <View style={styles.donDuSang1Stack}>
                    <Text style={styles.donDuSang1}>Don du sang</Text>
                    <Image
                        source={require("../../assets/images/don_sang_logo.png")}
                        resizeMode="contain"
                        style={styles.image1}
                    ></Image>
                </View>
                <CustomInputText style={styles.nameClass} onChangeText={onChangeLName} placeholder="Nom"></CustomInputText>
                <CustomInputText style={styles.nameClass} onChangeText={onChangeFName} placeholder="Prenom"></CustomInputText>
                <CustomInputText style={styles.psswdClass} onChangeText={onChangePassword} isPassword placeholder="Mot de passe" withIcon></CustomInputText>
                <CustomInputText style={styles.phoneClass} onChangeText={onChangePhoneNumber} placeholder="Téléphone"></CustomInputText>
                <CustomButton text="Confirmer" style={styles.confirmClass} action={createUser}></CustomButton>
                <Text style={{ left: 115, position: "relative", top: 20 }} onPress={() => setFirstTime(false)}>Vous avez un compte ?</Text>
            </View>
        );
    } else {
        return <SignIn />
    }

}

export default SignUp;
