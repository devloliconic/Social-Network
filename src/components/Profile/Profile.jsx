import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {

    return (
        <main>
            <Profileinfo/>
            <MyPosts profile = {props.state} dispatch = {props.dispatch}/>
        </main>
    );
};


export default Profile; 