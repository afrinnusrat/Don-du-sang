import React, { Component } from "react";
import { StyleSheet, View} from "react-native";
import SignIn from "./features/SignIn";
import SignUp from "./features/SignUp";
function App() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,254,254,1)"
  }
});

export default App;
