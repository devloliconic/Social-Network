import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.img}></div>
            <div>
                ava + description
            </div>
            <div>
                my post
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </main>
    );
};

export default Profile; 