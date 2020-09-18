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
    },
    posts:[
        {
            author:{avatar:"https://picsum.photos/200/300?user",name:"Renard",bloodGroup:"0-"},
            image:"https://picsum.photos/200/300?peace",
            likes:0,
            comments:0,
            commentsData:[{author:{name:"Gregoire",avatar:"https://picsum.photos/200/300?nature"},text:"DDEDDEDDEDDE"}]
        },
        {
            author:{avatar:"https://picsum.photos/200/300?user",name:"Renard",bloodGroup:"0-"},
            image:"https://picsum.photos/200/300?peace",
            likes:0,
            comments:0,
            commentsData:[{author:{name:"Gregoire",avatar:"https://picsum.photos/200/300?fire"},text:"DDEDDEDDEDDE"}]
        },{
            author:{avatar:"https://picsum.photos/200/300?user",name:"Renard",bloodGroup:"0-"},
            image:"https://picsum.photos/200/300?peace",
            likes:0,
            comments:0,
            commentsData:[{author:{name:"Gregoire",avatar:"https://picsum.photos/200/300?sky"},text:"DDEDDEDDEDDE"}]
        }
    ]
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
        case "ADD_POST":
            return state;
        case "REMOVE_POST":
            return state;
        default:
            return state;
    }
}