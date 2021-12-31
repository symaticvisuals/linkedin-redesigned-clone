import React from "react";
import "./Navigation.css";

import logo from "../../../../images/logo.png";
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlineSettings,
  MdFolderOpen,
} from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

function Navigation() {
  return (
    <div className="navigation">
      <img src={logo} alt="logo" className="linkedIn__logo" />
      <div className="navigation__icons">
        <MdOutlineDashboard className="navigation__icon" />
        <MdFolderOpen className="navigation__icon" />
        <MdOutlineAnalytics className="navigation__icon" />
        <MdOutlineSettings className="navigation__icon" />
      </div>
      <div className="user__profile">
        <BiUserCircle className="profile__avatar" />
        <p>Name</p>
      </div>
    </div>
  );
}

export default Navigation;
