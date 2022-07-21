import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.img}></div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </main>
    );
};

export default Profile; 