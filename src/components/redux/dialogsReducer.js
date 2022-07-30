const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
}


const dialogsReducer = (state = initialState,action) =>{

    if(action.type === "UPDATE-NEW-MESSAGE-TEXT"){
        state.newMessageText = action.text;
    }
    else if(action.type === "ADD-MESSAGE"){
        let newMessage = {
            id: '5',
            message: state.newMessageText,
        };
        state.messagesPerson.push(newMessage);
        state.newMessageText = '';

    }


    return state;
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


export default dialogsReducer