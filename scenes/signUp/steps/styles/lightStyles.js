import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    sloganClass: {
        marginLeft: 7,
        top: 0,
        position: "absolute",
        fontFamily: "alegreya-sc-700",
        color: "#121212",
        height: 46,
        width: 141,
        fontSize: 22,
    },
    image1: {
        top: 42,
        width: 172,
        height: 132,
        position: "absolute"
    },
    sloganContainer: {
        width: 146,
        height: 154,
        marginTop: 86,
    },
    nameClass: {
        height: 43,
        width: 265,
        borderWidth: 1,
        marginTop: 20,

        borderColor: "white",
        borderRadius: 12,
        backgroundColor: "rgba(230,230,230,0.5)"
    },
    psswdClass: {
        width: 265,
        height: 43,
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 20,
        borderColor: "white",
        backgroundColor: "rgba(230,230,230,0.5)"
    },
    phoneClass: {
        height: 43,
        width: 265,
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 20,
        borderColor: "white",
        backgroundColor: "rgba(230,230,230,0.5)"
    },
    confirmClass: {
        height: 36,
        width: 265,
        borderRadius: 13,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.66,
        shadowRadius: 0,
        backgroundColor: "rgba(66,70,139,1)",
        marginTop: 20,
    },
    genderPicker: {
        marginTop: 20, width: 130, height: 40,
        borderWidth: 1,
        borderRadius: 12,
        lineHeight: 16,
        borderColor: "white",
        backgroundColor: "rgba(230,230,230,0.5)"
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
        fontSize: 20,
        position: "absolute",
        top: 15,
        left: 15
    },
    formContainer: {
        marginTop: 200, backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: 20,
        width: 333,
        height: 420,
        alignItems: "center"
    },
    shareBtn: {
        height: 26,
        width: 26,
        backgroundColor: "rgba(68,76,137,1)",
        marginTop: 10,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.66,
        shadowRadius: 0,
    },
});
