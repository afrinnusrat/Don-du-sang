import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(255,254,254,1)",
      alignItems:"center"
    },
    donDuSang: {
      fontFamily: "georgia-regular",
      color: "#121212",
      height: 38,
      width: 138,
      fontSize: 22,
      marginTop: 105,
      alignSelf: "center"
    },
    image: {
      width: 200,
      height: 200,
    },
    signInClass: {
      height: 44,
      width: 200,
      backgroundColor:"#D0021B",
      borderRadius: 12,
      shadowColor: "rgba(121,107,107,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 5,
      shadowOpacity: 1,
      shadowRadius: 0,
      marginTop: 107,
    },
    signUpClass: {
      height: 44,
      width: 200,
      backgroundColor:"#117919",
      borderRadius: 12,
      shadowColor: "rgba(121,107,107,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 5,
      shadowOpacity: 1,
      shadowRadius: 0,
      marginTop: 40,
    }
  });