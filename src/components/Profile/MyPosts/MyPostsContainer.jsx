import React, {useState} from "react";
import {addPostActionCreater, updateNewPostActionCreater} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const onTextChange = (post) => {
        let action = updateNewPostActionCreater(post);
        props.dispatch(action);

    }
    const addPost = () => {
        props.dispatch(addPostActionCreater())
    }
    return (
        <MyPosts updateNewPostText={onTextChange} addPost={addPost} state = {props.state}/>
    );
};

export default MyPostsContainer;