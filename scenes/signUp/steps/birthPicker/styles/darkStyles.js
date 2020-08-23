import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "black"
    },
    image: {
        top: 42,
        width: 172,
        height: 132,
        position: "absolute"
    },
    lightDarkSwitch: {
        //backgroundColor: "#144177",
        fontSize: 40,
        position: "absolute",
        top: 15,
        right: 15
    },
    languageIcon: {
        //backgroundColor: "#144177",
        fontSize: 20,
        position: "absolute",
        top: 15,
        left: 15
    },
    homeBtn: {
        position:"absolute",
        height: 26,
        width: 26,
        //backgroundColor: "rgba(68,76,137,1)",
        bottom: 30,
        left:"45%",
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
