import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
let posts = [
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
];
const dialogsData = [
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
]
const messagesPerson = [
    {id: "1", message: "hi"},
    {id: "2", message: "cool"},
    {id: "3", message: "deam"},
    {id: "4", message: "deam"}
];
root.render(
    <BrowserRouter>
        <App post={posts} dialogsData={dialogsData} messagesPerson={messagesPerson}/>
    </BrowserRouter>
);
