import React from "react";
import { View, Image } from "react-native";
import SignIn from "./scenes/signIn";
import SignUp from "./scenes/signUp";
import Dashboard from "./scenes/dashboard"
//
import CustomButton from "./generic/CustomButton";
import CustomBtnIcon from "./generic/CustomBtnIcon";

import lightStyles from "./styles/lightMode";
import darkStyles from "./styles/darkMode";
function App() {
  const [toLogin, setToLogin] = React.useState(false);
  const [toSignUp, setToSignUp] = React.useState(false);
  const [styles, setStyles] = React.useState(lightStyles);
  const [logo, setLogo] = React.useState(
    require("./assets/images/blood_donation.png")
  )
  const swichLight = () => {
    if (styles === lightStyles) {
      setStyles(darkStyles);
      setLogo(
        require("./assets/images/logo_lightMode.png")
      )
    } else {
      setStyles(lightStyles);
      setLogo(
        require("./assets/images/blood_donation.png")
      )
    }
  }
  return (
    <Dashboard />
  )
  /*
  if (toLogin) {
    return <SignIn />;
  } else if (toSignUp) {
    return <SignUp />;
  } else {
    return (
      <View style={styles.container}>
        <CustomBtnIcon iconName="language" fontAwesome={true} style={styles.languageIcon} action={() => { }} />
        <CustomBtnIcon iconName="theme-light-dark" style={styles.lightDarkSwitch} action={swichLight} />
        <Image
          source={logo}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <CustomButton style={styles.signInClass} text="Se connecter" action={() => setToLogin(true)} ></CustomButton>
        <CustomButton style={styles.signUpClass} text="S'inscrire" action={() => setToSignUp(true)}></CustomButton>
        <CustomBtnIcon iconName="share" style={styles.shareIcon} action={() => { }} />
        <CustomBtnIcon iconName="star" style={styles.starIcon} action={() => { }} />
        <CustomBtnIcon iconName="human-greeting" style={styles.humanGreetingIcon} action={() => { }} />
      </View>
    );
  }*/
}

export default App;
