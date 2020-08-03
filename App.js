import React from "react";
import { View, Image, Text } from "react-native";
import SignIn from "./features/signIn/SignIn";
import SignUp from "./features/signUp/SignUp";
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
        <Text style={styles.donDuSang}>Don du sang</Text>
        <Image
          source={require("./assets/images/don_sang_logo.png")}
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
