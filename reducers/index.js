import AsyncStorage from '@react-native-community/async-storage';

const initState={
    logged:false,
    darkMode:false,
    lightMode:true,
    user:{
        login:"gregoire",
        password:"",
        type:"",
        location:""
    }
}
const setLogged=async (logged)=>{
    logged=(await AsyncStorage.getItem("loggedUser")!=null);
}
export default (state=initState,action)=>{
    //let newLogging=false;
    //setLogged(newLogging);
    if(action.type==="AUTH"){
        return {
            ...state,
            logged:true,
            user:action.user
        }
    }else if(action.type==="DARK_THEME"){
        return {
            ...state,
            darkMode:true,
            lightMode:false
        }
    }else if(action.type==="LIGHT_THEME"){
        return {
            ...state,
            darkMode:false,
            lightMode:true
        }
    }else if(action.type==="UPDATE_PROFILE"){
        return {
            ...state,
            user:action.user
        }
    }else if(action.type==="DISCONNECT"){
        return {
            ...state,
            logged:false,
            user:initState.user
        }
    }else if(action.type==="CREATE_ACCOUNT"){
        return state
    }
    return state
}