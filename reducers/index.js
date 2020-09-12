import AsyncStorage from '@react-native-community/async-storage';

let initState = {
    logged: false,
    darkMode: false,
    lightMode: true,
    user: {
        login: "gregoire",
        password: "",
        type: "",
        location: ""
    }
};/*
(async ()=>{
    if(await AsyncStorage.getItem("loggedUser")!=null){
        initState.logged=true
        //initState.user=JSON.parse(await AsyncStorage.getItem("loggedUser"));
    }
})();*/

export default (state = initState, action) => {
    switch (action.type) {
        case "AUTH":
            return {
                ...state,
                logged: true,
                user: action.user
            }
        case "DARK_THEME":
            return {
                ...state,
                darkMode: true,
                lightMode: false
            }
        case "LIGHT_THEME":
            return {
                ...state,
                darkMode: false,
                lightMode: true
            }
        case "UPDATE_PROFILE":
            return {
                ...state,
                user: action.user
            }
        case "DISCONNECT":
            return {
                ...state,
                logged: false,
                user: initState.user
            }
        case "CREATE_ACCOUNT":
            return state;
        case "ADD_LIKE":
            return state
        case "REMOVE_LIKE":
            return state;
        case "ADD_COMMENT":
            return state;
        case "REMOVE_COMMENT":
            return state;
        default:
            return state;
    }
}