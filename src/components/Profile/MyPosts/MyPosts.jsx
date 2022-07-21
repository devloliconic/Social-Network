import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My postst
            <Post message = "i love react" url = "https://otvet.imgsmail.ru/download/875a8375f91de049494d6073098e8a2f_8cc5a2104789fc81754a8761aaa8cdf5.jpg"/>
            <Post message = "hi" url = "https://otvet.imgsmail.ru/download/875a8375f91de049494d6073098e8a2f_8cc5a2104789fc81754a8761aaa8cdf5.jpg"/>
        </div>
    );
};

export default MyPosts; 