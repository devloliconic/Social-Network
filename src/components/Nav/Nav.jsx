import React from "react";

import {Link} from "react-router-dom";
import s from "./Nav.module.css"
import FriendsList from "./FriendsList/FriendsList";

const Nav = (props) => {

    return (
        <div className={s.nav}>
            <nav>
                <div className={s.item}>
                    <Link to={"/"} className={s.link}>Profile</Link>
                </div>
                <div className={s.item}>
                    <Link to={"/dialogs"} className={s.link}>Messages</Link>
                </div>
                <div className={s.item}>
                    <Link to={"/news"} className={s.link}>News</Link>
                </div>
                <div className={s.item}>
                    <Link to={"/music"} className={s.link}>Music</Link>
                </div>
                <div className={s.item}>
                    <Link to={"/settings"} className={s.link}>Settings</Link>
                </div>
            </nav>
            <div className={s.friends_list}>
                <FriendsList friends = {props.state.friends}/>
            </div>
        </div>
    );
};

export default Nav; 