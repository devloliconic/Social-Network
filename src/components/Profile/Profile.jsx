import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {

    return (
        <main>
            <Profileinfo/>
            <MyPosts profile = {props.state} addPost={props.addPost} addText = {props.addText}/>
        </main>
    );
};


export default Profile; 