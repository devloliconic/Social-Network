import React from "react";
import s from "./FriendsList.module.css"
import Friend from "./Friend/Friend";

const FriendsList = (props) => {
    const friendsData = props.friends.map(obj => <Friend url={obj.url} name={obj.name} id={obj.id}/>)
    return (
        <div>
            <h3 className={s.title}>friends</h3>
            <div className={s.friendlist}>
                {friendsData}
            </div>
        </div>
    )
};

export default FriendsList;