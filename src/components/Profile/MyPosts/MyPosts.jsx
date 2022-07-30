import React, {useState} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postData = props.state.posts.map(obj => <Post id={obj.id} url={obj.url} message={obj.message}/>)

    const [post, setPost] = useState(props.state.newPostMessage)


    const onTextChange = (e) => {
        setPost(e.target.value);
        props.updateNewPostText(post)

    }
    const onAddPost = () => {
        props.addPost()
    }
    return (
        <div className={s.post}>
            <h1 className={s.title}>My postst</h1>
            <div className={s.area}>
                <textarea value={post} onChange={onTextChange}></textarea>
            </div>
            <button className={s.btn} onClick={onAddPost}>Постануть</button>
            {postData}
        </div>
    );
};

export default MyPosts; 