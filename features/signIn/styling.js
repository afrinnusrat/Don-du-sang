import {StyleSheet} from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1
    },
    confirmBtn: {
        height: 48,
        width: 150,
        backgroundColor: "rgba(65,80,123,1)",
        borderWidth: 0,
        borderColor: "#000000",
        borderRadius: 16,
        marginTop: 20,
        marginLeft: 112
    },
    shareBtn: {
        height: 56,
        width: 56,
        backgroundColor: "rgba(68,76,137,1)",
        marginTop: 60,
        marginLeft: 160
    },
    donDuSang1: {
        top: 10,
        position: "absolute",
        fontFamily: "alegreya-sc-700",
        color: "#121212",
        height: 46,
        width: 141,
        fontSize: 22,
        left: 17
    },
    image: {
        top: 34,
        left: 0,
        width: 175,
        height: 166,
        position: "absolute"
    },
    donDuSang1Stack: {
        width: 175,
        height: 200,
        marginTop: 70,
        marginLeft: 100
    },
    passwordInput: {
        width: 265,
        height: 43,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 20,
        marginLeft: 55
    },
    loginInput: {
        height: 43,
        width: 265,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 12,
        marginTop: 50,
        marginLeft: 55
    }
});