import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(255,254,254,1)",
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
    googleSignUp: {
        height: 44,
        width: 280,
        backgroundColor: "#D0021B",
        borderRadius: 12,
        shadowColor: "red",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 180,
    },
    facebookSignUp: {
        height: 44,
        width: 280,
        backgroundColor: "#144177",
        borderRadius: 12,
        shadowColor: "rgba(121,107,107,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 10,
    },
    profileSignUp: {
        height: 44,
        width: 280,
        backgroundColor: "#4C8211",
        borderRadius: 12,
        shadowColor: "rgba(121,107,107,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 5,
    },
    lightDarkSwitch: {
        backgroundColor: "#144177",
        fontSize: 40,
        position: "absolute",
        top: 15,
        right: 15
    },
    languageIcon: {
        backgroundColor: "#144177",
        fontSize: 40,
        position: "absolute",
        top: 15,
        left: 15
    },
    humanGreetingIcon: {
        backgroundColor: "#144177",
        position: "absolute",
        fontSize: 40,
        bottom: 20,
        left: 45
    },
    starIcon: {
        backgroundColor: "#144177",
        position: "absolute",
        fontSize: 40,
        bottom: 20,
        left: "55%"
    },
    homeBtn: {
        backgroundColor: "#144177",
        position: "absolute",
        fontSize: 40,
        bottom: 20,
        right: 40
    },
    questionIcon: {
        backgroundColor: "#144177",
        position: "absolute",
        fontSize: 40,
        bottom: 20,
        left: "34%"
    }
});