import React from "react";
import {BiCompass, BiPaperPlane} from "react-icons/bi";
import {FaRegHeart, FaSistrix} from "react-icons/fa";
import {MdHome} from "react-icons/md";
import {ContextProvider} from "../Global/Context";

const Navbar = () => {
  const {model, openModel, user, loader, logOut} = React.useContext(ContextProvider);
  console.log("my model", model);

  const openForms = () => {
    openModel();
  };

  const userLogOut = () => {
    logOut();
  }

  const checkUser = () => {
    return !loader && user ? (
      <li>{user.displayName}/ <span onClick={userLogOut}>Log Out</span></li>
    ) : (
      <li onClick={openForms}>Register/Login</li>
    );
  };

  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <img src="/images/logo.png" alt="" />
        </div>
      </div>
      <div className="navbar__middle">
        <div className="navbar__middle-search">
          <input type="text" className="navbar__search" placeholder="Search" />
          <FaSistrix className="searchIcon" />
        </div>
      </div>
      <div className="navbar__last">
        <li>
          <MdHome className="navbar__icon" />
        </li>
        <li>
          <BiPaperPlane className="navbar__icon" />
        </li>
        <li>
          <BiCompass className="navbar__icon" />
        </li>
        <li>
          <FaRegHeart className="navbar__icon" />
        </li>
        {checkUser()}
      </div>
    </div>
  );
};

export default Navbar;
