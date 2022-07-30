const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    posts: [
        {
            id: "1",
            message: "i love react",
            url: "https://otvet.imgsmail.ru/download/875a8375f91de049494d6073098e8a2f_8cc5a2104789fc81754a8761aaa8cdf5.jpg"
        },
        {
            id: "1",
            message: "i rare",
            url: "https://otvet.imgsmail.ru/download/875a8375f91de049494d6073098e8a2f_8cc5a2104789fc81754a8761aaa8cdf5.jpg"

        }, {
            id: "1",
            message: "i rare",
            url: "https://otvet.imgsmail.ru/download/875a8375f91de049494d6073098e8a2f_8cc5a2104789fc81754a8761aaa8cdf5.jpg"

        },
    ],
    newPostMessage: "уроды",
}


const profileReducer = (state = initialState,action) =>{
    if(action.type === ADD_POST){
        let newPost = {
            id: '5',
            message: state.newPostMessage,
            url: "https://otvet.imgsmail.ru/download/875a8375f91de049494d6073098e8a2f_8cc5a2104789fc81754a8761aaa8cdf5.jpg"
        };
        state.posts.push(newPost);
        state.newPostMessage = '';
    }
    else if(action.type === UPDATE_NEW_POST_TEXT){
        state.newPostMessage = action.text;
    }
    return state;
}
export const addPostActionCreater = () =>{
    return {
        type : ADD_POST
    }
}
export const updateNewPostActionCreater = (textMess) =>{
    return{
        type: UPDATE_NEW_POST_TEXT,
        text: textMess,
    }
}

export default  profileReducer;