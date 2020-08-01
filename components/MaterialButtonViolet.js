import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import axios from "axios";

function MaterialButtonViolet(props) {
  const connexion = () => {
    /*fetch("http://localhost:9090/user", {
      method: "POST",
      body: JSON.stringify({
        login: props.login,
        password: props.password
      })
    }).then(response =>response.json())
      .then(res => {
        if (res.data === "Ok") {
          alert("Welcome User");
        } else {
          alert("Un mauvais utilisateur");
        }
      },err=>{
        console.log(err)
      })*/
    axios.post("http://dcc23f14d62f.ngrok.io/user",{
      login:props.login,
      password:props.password
    })
      .then(res => {
        if(res.data==="Ok") alert("Welcome !");
        else alert("Une mauvaise saisie !!")
        console.log(res.data)
      }).catch(ex => {
        console.log(ex)
      })
  }
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={connexion}>
      <Text style={styles.confirmer}>{props.confirmer || "Confirmer"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
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
    color: "#fff",
    fontSize: 14,
  }
});

export default MaterialButtonViolet;
