import {rerenderEntireTree} from "../../render";

const state = {
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
        ]
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
}

export const addPost = (PostMessage) => {
    let newPost = {
        id: '5',
        message: PostMessage,
        url: "https://otvet.imgsmail.ru/download/875a8375f91de049494d6073098e8a2f_8cc5a2104789fc81754a8761aaa8cdf5.jpg"
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);

}

export const addText = (text) => {
    state.profilePage.newPostMessage = text
    rerenderEntireTree(state);

}

export default state