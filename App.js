import React from "react";
import { View, Image, Text } from "react-native";
import SignIn from "./features/signIn";
import SignUp from "./features/signUp";
//
import CustomButton from "./generic/CustomButton";
//
import styles from "./styling"
function App() {
  const [toLogin, setToLogin] = React.useState(false);
  const [toSignUp, setToSignUp] = React.useState(false);
  if (toLogin) {
    return <SignIn />;
  } else if (toSignUp) {
    return <SignUp />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.sloganClass}>Don du sang</Text>
        <Image
          source={require("./assets/images/blood_donation.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <CustomButton style={styles.signInClass} text="Se connecter" action={()=>setToLogin(true)} ></CustomButton>
        <CustomButton style={styles.signUpClass} text="S'inscrire" action={()=>setToSignUp(true)}></CustomButton>
      </View>
    );
  }
}

export default App;
