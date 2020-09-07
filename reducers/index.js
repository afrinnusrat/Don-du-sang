const initState={
    logged:false,
    darkMode:false,
    user:{
        login:"gregoire",
        password:"",
        type:"",
        location:""
    }
}

export default (state=initState,action)=>{
    if(action.type==="AUTH"){
        return {
            ...state,
            logged:true,
            user:action.user
        }
    }else if(action.type==="DARK_THEME"){
        return {
            ...state,
            darkMode:true
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
    }
    return state
}