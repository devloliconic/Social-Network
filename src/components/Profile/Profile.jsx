import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <main>
            <div className={s.img}></div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </main>
    );
};

export default Profile; 