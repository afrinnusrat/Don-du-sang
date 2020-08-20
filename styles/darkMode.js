import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center"
    },
    sloganClass: {
        marginLeft: 10,
        fontFamily: "georgia-regular",
        color: "#121212",
        height: 38,
        width: 138,
        fontSize: 22,
        marginTop: 105,
        alignSelf: "center"
    },
    image: {
        marginTop: 50,
        width: 200,
        height: 177
    },
    signInClass: {
        height: 44,
        width: 280,
        backgroundColor: "#D0021B",
        borderRadius: 12,
        shadowColor: "white",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 250,
    },
    signUpClass: {
        height: 44,
        width: 280,
        backgroundColor: "#144177",
        borderRadius: 12,
        shadowColor: "rgba(155,155,155,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 20,
    },
    lightDarkSwitch: {
        fontSize: 40,
        position: "absolute",
        top: 15,
        right: 15
    },
    languageIcon: {
        fontSize: 40,
        position: "absolute",
        top: 15,
        left: 15
    },
    humanGreetingIcon: {
        position: "absolute",
        fontSize: 40,
        bottom: 40,
        left: 45
    },
    starIcon: {
        position: "absolute",
        fontSize: 40,
        bottom: 40,
        left: "45%"
    },
    shareIcon: {
        position: "absolute",
        fontSize: 40,
        bottom: 40,
        right: 40
    }
});