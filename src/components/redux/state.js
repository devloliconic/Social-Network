const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let store = {
    _state:{
        profilePage: {
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

        },
        dialogsPage: {
            dialogsData: [
                {
                    id: "1",
                    name: "dima",
                    url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
                },
                {
                    id: "2",
                    name: "kirill",
                    url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
                },
                {
                    id: "3",
                    name: "lena",
                    url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
                },
                {
                    id: "4",
                    name: "sasha",
                    url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
                },
                {
                    id: "5",
                    name: "vitya",
                    url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
                },
                {
                    id: "6",
                    name: "oleg",
                    url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
                }
            ],
            messagesPerson: [
                {id: "1", message: "hi"},
                {id: "2", message: "cool"},
                {id: "3", message: "deam"},
                {id: "4", message: "deam"}
            ],
            newMessageText: "ку",

        },
        navPage: {
            friends: [
                {
                    id: 1,
                    name: "oleg",
                    url: "https://sun9-43.userapi.com/impf/6JQOrbieY77eeGbbUS-EyJeNy-a5lBA3eZqtqQ/ahyVy8J8nlk.jpg?size=750x750&quality=95&sign=9734f1653db5eaf5b2ada4b56176cffa&type=album"
                },
                {
                    id: 2,
                    name: "ana",
                    url: "https://sun9-88.userapi.com/impf/ttrFOvgscybh-zY1-sURai6eGLOjleGvlbkEMA/RLOy9QFwGbI.jpg?size=1280x1010&quality=95&sign=32a796710756f2ce1038586f62da1075&type=album"
                },
                {
                    id: 3,
                    name: "vika",
                    url: "https://sun9-37.userapi.com/impf/kauReOOgHdb7NWNgiLWB87Ay1aLtS0rZyqrFmQ/18vm8Jo03pc.jpg?size=512x512&quality=95&sign=7626f201a616914197c78fe96f79453f&type=album"
                },
            ]
        }
    },
    _callSubscriber(){
        console.log("state changed");
    },
    getState() {
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },




    dispatch(action){
        if(action.type === "ADD-POST"){
            let newPost = {
                id: '5',
                message: this._state.profilePage.newPostMessage,
                url: "https://otvet.imgsmail.ru/download/875a8375f91de049494d6073098e8a2f_8cc5a2104789fc81754a8761aaa8cdf5.jpg"
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostMessage = '';
            this._callSubscriber(this._state);

        }
        else if(action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostMessage = action.text;
            this._callSubscriber(this._state);
        }
        else if(action.type === "UPDATE-NEW-MESSAGE-TEXT"){
            this._state.dialogsPage.newMessageText = action.text;
            this._callSubscriber(this._state);
        }
        if(action.type === "ADD-MESSAGE"){
            let newMessage = {
                id: '5',
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messagesPerson.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        }
    }
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
export const addMessageCreater = () =>{
    return {
        type : ADD_MESSAGE
    }
}
export const updateNewMessageCreater = (textMess) =>{
    return{
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: textMess,
    }
}
export default store
