import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRightIconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholder="Password" style={styles.textInput}></TextInput>
      <Icon name="eye" style={styles.iconStyle}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "rgba(131,11,220,1)",
    backgroundColor: "transparent",
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

export default MaterialRightIconTextbox;