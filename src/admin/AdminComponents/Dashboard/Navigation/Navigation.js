import React from "react";
import "./Navigation.css";
import { BiUserCircle } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  const admin = useSelector((state) => state.admin.userName);
  return (
    <div className="navigation">
      <span></span>
      <div className="navigation__icons">
        <Link to="admin-users" className="navigation__icon">
          <FiUsers />
        </Link>
        <Link to="admin-posts" className="navigation__icon">
          <BsReverseLayoutTextWindowReverse />
        </Link>
        <Link to="admin-mostliked" className="navigation__icon">
          <AiOutlineHeart />
        </Link>
        <Link to="admin-filter" className="navigation__icon">
          <FiFilter />
        </Link>
        <Link to="admin-add-filter" className="navigation__icon">
          <IoMdAdd />
        </Link>
      </div>
      <div className="user__profile">
        <BiUserCircle className="profile__avatar" />
        <p>{admin}</p>
      </div>
    </div>
  );
}

export default Navigation;
