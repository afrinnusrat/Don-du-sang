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
        height: 26,
        width: 26,
        marginTop:70,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.66,
        shadowRadius: 0,
    },
    logo:{
        top: 42,
        width: 172,
        height: 132,
        position: "absolute"
    },
    /** 
     * 
     */
    questionPicker:{
        marginTop: 20, width: 265, height: 40,
        borderWidth: 1,
        borderRadius: 12,
        lineHeight: 16,
        borderColor: "white",
        backgroundColor: "rgba(230,230,230,0.5)"
    },
    response1:{
        height: 43,
        width: 265,
        borderWidth: 1,
        marginTop: 20,
        borderColor: "white",
        borderRadius: 12,
        backgroundColor: "rgba(230,230,230,0.5)"
    }
});
