import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

function CustomBtnIcon(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.action}>
      {!props.fontAwesome &&
        <Icon name={props.iconName} style={styles.icon}></Icon>
      }
      {props.fontAwesome &&
        <IconFontAwesome name={props.iconName} style={styles.icon}></IconFontAwesome>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
    minHeight: 40
  },
  icon: {
    color: "white",
    fontSize: 24,
    alignSelf: "center"
  }
});

export default CustomBtnIcon;
