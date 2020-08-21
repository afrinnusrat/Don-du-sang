import {StyleSheet} from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        backgroundColor: "black"
    },
    confirmBtn: {
        height: 48,
        width: 265,
        backgroundColor: "rgba(65,80,123,1)",
        borderWidth: 0,
        borderColor: "#000000",
        borderRadius: 16,
        marginTop: 20,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.66,
        shadowRadius: 0,
    },
    shareBtn: {
        height: 56,
        width: 56,
        backgroundColor: "rgba(68,76,137,1)",
        marginTop: 60,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.66,
        shadowRadius: 0,
    },
    sloganClass: {
        top: 10,
        marginLeft:25,
        position: "relative",
        fontFamily: "alegreya-sc-700",
        color: "#121212",
        height: 46,
        width: 141,
        fontSize: 22,
    },
    image: {
        top: -40,
        width: 175,
        height: 166,
        position: "absolute"
    },
    sloganContainer: {
        width: 175,
        height: 200,
        marginTop: 70,
    },
    passwordInput: {
        width: 265,
        height: 43,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 20,
    },
    formContainer: {
        backgroundColor: "rgba(255,255,255,0.31)",
        borderRadius: 20,
        width: 333,
        height: 280,
        alignItems: "center"
    },
    loginInput: {
        height: 43,
        width: 265,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 50,
    },
    lightDarkSwitch: {
        backgroundColor: "#144177",
        fontSize: 40,
        position: "absolute",
        top: -50,
        right: -80
    },
    languageIcon: {
        backgroundColor: "#144177",
        fontSize: 20,
        position: "absolute",
        top: -50,
        left: -80
    },
});