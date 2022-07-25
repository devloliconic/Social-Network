import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postData = props.profile.posts.map( obj => <Post id={obj.id} url={obj.url} message={obj.message}/>)

    let newPostElement = React.createRef();

    const onTextChange = () => {
        let text = newPostElement.current.value;
        props.addText(text);
    }
    const addPost = () => {
        let text = newPostElement.current.value;
        newPostElement.current.value = "";
        props.addPost(text);
    }
    return (
        <div className={s.post}>
            <h1 className={s.title}>My postst</h1>
            <div className={s.area}>
                <textarea ref={newPostElement} value={props.profile.newPostMessage} onChange={onTextChange}></textarea>
            </div>
            <button className={s.btn} onClick={addPost}>Постануть</button>
            {postData}
        </div>
    );
};

export default MyPosts; 