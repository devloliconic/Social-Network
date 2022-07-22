import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postData = props.posts.map( obj => <Post id={obj.id} url={obj.url} message={obj.message}/>)
    return (
        <div className={s.post}>
            <h1 className={s.title}>My postst</h1>
            <div className={s.area}>
                <textarea></textarea>
            </div>
            <button className={s.btn}>Постануть</button>
            {postData}
        </div>
    );
};

export default MyPosts; 