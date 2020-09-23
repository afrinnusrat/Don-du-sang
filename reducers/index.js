import AsyncStorage from '@react-native-community/async-storage';

let initState = {
    logged: false,
    darkMode: false,
    lightMode: true,
    user: {
        login: "gregoire",
        password: "",
        type: "",
        location: "",
    },
    posts: [
        {
            id: 0,
            author: { avatar: "https://picsum.photos/200/300?user", name: "Renard", bloodGroup: "0-" },
            image: "https://picsum.photos/200/300?peace",
            likes: 0,
            comments: 0,
            candidates: [{ id: 0, name: "Gregoire", avatar: "https://picsum.photos/200/300?rain" }],
            commentsData: [{ author: { name: "Gregoire", avatar: "https://picsum.photos/200/300?nature" }, text: "DDEDDEDDEDDE" }]
        },
        {
            id: 1,
            author: { avatar: "https://picsum.photos/200/300?user", name: "Tomas", bloodGroup: "0-" },
            image: "https://picsum.photos/200/300?peace",
            likes: 0,
            comments: 0,
            candidates: [{ id: 0, name: "Gregoire", avatar: "https://picsum.photos/200/300?rain" }],
            commentsData: [{ author: { name: "Gregoire", avatar: "https://picsum.photos/200/300?fire" }, text: "DDEDDEDDEDDE" }]
        }, {
            id: 2,
            author: { avatar: "https://picsum.photos/200/300?user", name: "Richard", bloodGroup: "0-" },
            image: "https://picsum.photos/200/300?peace",
            likes: 0,
            comments: 0,
            candidates: [{ id: 0, name: "Gregoire", avatar: "https://picsum.photos/200/300?rain" }],
            commentsData: [{ author: { name: "Gregoire", avatar: "https://picsum.photos/200/300?sky" }, text: "DDEDDEDDEDDE" }]
        }
    ],
    chats: [
        {
            id: 0, source: { name: "Tomas", avatar: "" }, destination: { name: "Keven", avatar: "" }, message: "Always keep trying .. unfold your core"
        },
        {
            id: 1, source: { name: "Keven", avatar: "" }, destination: { name: "Tomas", avatar: "" }, message: "Helping others is the best way to feel happy"
        }
    ],
    users: []
};/*
(async ()=>{
    if(await AsyncStorage.getItem("loggedUser")!=null){
        initState.logged=true
        //initState.user=JSON.parse(await AsyncStorage.getItem("loggedUser"));
    }
})();*/
const addComment = (post_id, comment) => {
    let posts = initState.posts;
    posts.forEach(post => {
        if (post.id === post_id) {
            post.commentsData.push(
                {
                    author: comment.author,
                    text: comment.text
                }
            )
            post.comments++;
        }
    })
    return posts;
}
const addCandidate = (post_id, candidate) => {
    let posts = initState.posts;
    posts.forEach(post => {
        if (post.id === post_id) {
            post.candidates.push(candidate);
        }
    })
    return posts;
}
const removeCandidate = (post_id, candidate_name) => {
    let posts = initState.posts;
    posts.forEach(post => {
        if (post.id === post_id) {
            post.candidates.forEach((cand, index) => {
                if (cand.name === candidate_name)
                    post.candidates.splice(index, 1)
            })
        }
    })
    return posts;
}
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
            return {
                ...state,
                posts: addComment(action.data.post_id, action.data.comment)
            };
        case "REMOVE_COMMENT":
            return state;
        case "ADD_POST":
            return state;
        case "REMOVE_POST":
            return state;
        case "ADD_CHAT": {
            let moreChats = state.chats
            moreChats.push(action.newChat)
            return {
                ...state,
                chats: moreChats
            };
        }
        case "ADD_CANDIDATE":
            return {
                ...state,
                posts: addCandidate(action.data.post_id, action.data.candidate)
            };
        case "REMOVE_CANDIDATE":
            return {
                ...state,
                posts: removeCandidate(action.data.post_id, action.data.candidate_name)
            };
        default:
            return state;
    }
}