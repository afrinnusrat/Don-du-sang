import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonPrimary(props) {
  const createUser=()=>{
    /**
     * props.newUser
     */
    alert('Merci de nous rejoindre '+props.newUser.firstName)
  }
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={createUser}>
      <Text style={styles.confirmer}>Confirmer</Text>
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
    color: "#fff",
    fontSize: 14
  }
});

export default MaterialButtonPrimary;
