import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.post_flex}>
            <img className={s.post_img} src={props.url} alt="" />
            <p className={s.message}>{props.message}</p>
        </div>
    );
};

export default Post; 