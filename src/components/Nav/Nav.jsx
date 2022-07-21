import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a className={classes.link} href="">Profile</a>
      </div>
      <div className={classes.item}>
        <a className={classes.link} href="">Messages</a>
      </div>
      <div className={classes.item}>
        <a className={classes.link} href="">News</a>
      </div>
      <div className={classes.item}>
        <a className={classes.link} href="">Music</a>
      </div>
      <div className={classes.item}>
        <a className={classes.link} href="">Settings</a>
      </div>
    </nav>
  );
};

export default Nav; 