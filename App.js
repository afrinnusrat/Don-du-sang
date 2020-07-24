import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import MaterialButtonViolet from "./components/MaterialButtonViolet";
import MaterialButtonShare from "./components/MaterialButtonShare";

function App(props) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Don du sang" style={styles.textInput}></TextInput>
      <TextInput
        placeholder="Votre Login :"
        style={styles.votreLogin}
      ></TextInput>
      <TextInput
        placeholder="Mot de passe :"
        style={styles.motDePasse}
      ></TextInput>
      <MaterialButtonViolet
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>
      <MaterialButtonShare
        style={styles.materialButtonShare}
      ></MaterialButtonShare>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,254,254,1)"
  },
  textInput: {
    fontFamily: "roboto-700",
    color: "#121212",
    width: 164,
    height: 37,
    lineHeight: 25,
    letterSpacing: 3,
    fontSize: 22,
    marginTop: 79,
    marginLeft: 106
  },
  votreLogin: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 61,
    width: 246,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 13,
    marginTop: 124,
    marginLeft: 65
  },
  motDePasse: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 60,
    width: 246,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 13,
    marginTop: 27,
    marginLeft: 65
  },
  materialButtonViolet: {
    height: 48,
    width: 150,
    backgroundColor: "rgba(86,25,25,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 16,
    marginTop: 38,
    marginLeft: 113
  },
  materialButtonShare: {
    height: 56,
    width: 56,
    backgroundColor: "rgba(70,37,37,1)",
    marginTop: 59,
    marginLeft: 160
  }
});

export default App;
