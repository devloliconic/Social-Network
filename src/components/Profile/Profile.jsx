import React from "react";

import s from "./Profile.module.css"
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <main>
            <Profileinfo/>
            <MyPostsContainer state = {props.state} dispatch = {props.dispatch}/>
        </main>
    );
};


export default Profile; 