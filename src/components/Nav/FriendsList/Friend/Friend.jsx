import React from "react";
import s from "./Friend.module.css"

const Friend = (props) => {
    return (
        <div className={s.single_friend}>
            <img className={s.img} src={props.url} alt=""/>
            <p className={s.name}>{props.name}</p>
        </div>
    )
};

export default Friend;