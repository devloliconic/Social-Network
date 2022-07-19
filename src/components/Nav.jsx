import React from "react";


const Nav = () => {
  return (
    <nav className={"nav"}>
      <div className="item">
        <a className="link" href="">Profile</a>
      </div>
      <div className="item">
        <a className="link" href="">Messages</a>
      </div>
      <div className="item">
        <a className="link" href="">News</a>
      </div>
      <div className="item">
        <a className="link" href="">Music</a>
      </div>
      <div className="item">
        <a className="link" href="">Settings</a>
      </div>
    </nav>
  );
};

export default Nav; 