import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = () => {
    return (
        <main>
            <Profileinfo/>

            <MyPosts/>
        </main>
    );
};

export default Profile; 