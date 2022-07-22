import React from "react";

import s from "./Profileinfo.module.css"

const Profileinfo = () => {
    return (
        <div>
            <div className={s.img}></div>
            <div className={s.profileinfo}>
                ava + description
            </div>
        </div>
    )
        ;
};

export default Profileinfo;