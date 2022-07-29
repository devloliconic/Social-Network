import React, {useState} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreater, updateNewPostActionCreater} from "../../redux/state";

const MyPosts = (props) => {
    const postData = props.profile.posts.map( obj => <Post id={obj.id} url={obj.url} message={obj.message}/>)

    const [post, setPost] = useState(props.profile.newPostMessage)




    const onTextChange = (e) => {
        setPost(e.target.value);
        if(post !== " "){
            props.dispatch(updateNewPostActionCreater(post));
        }

    }
    const addPost = () => {
        props.dispatch(addPostActionCreater())
        setPost(props.profile.newPostMessage)
    }
    return (
        <div className={s.post}>
            <h1 className={s.title}>My postst</h1>
            <div className={s.area}>
                <textarea  value={post} onChange={onTextChange}></textarea>
            </div>
            <button className={s.btn} onClick={addPost}>Постануть</button>
            {postData}
        </div>
    );
};

export default MyPosts; 