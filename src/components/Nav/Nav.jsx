import React from "react";
import classes from "./Nav.module.css";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <Link to={"/profile"} className={classes.link} >Profile</Link>
      </div>
      <div className={classes.item}>
        <Link to={"/dialogs"} className={classes.link} >Messages</Link>
      </div>
      <div className={classes.item}>
        <Link to={"/news"} className={classes.link} >News</Link>
      </div>
      <div className={classes.item}>
        <Link to={"/music"} className={classes.link} >Music</Link>
      </div>
      <div className={classes.item}>
        <Link to={"/settings"} className={classes.link} >Settings</Link>
      </div>
    </nav>
  );
};

export default Nav; 