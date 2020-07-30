import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Linking } from "react-native";

function MaterialButtonViolet(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
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
