import React from "react";
import "./Folders.css";

import { RiFoldersFill } from "react-icons/ri";
import { BiDotsVertical } from "react-icons/bi";

function Folders() {
  return (
    <div className="Folders">
      <h2>My Folders</h2>
      <div className="folder__cards">
        <div className="folder__card">
          <div className="folder__icons">
            <RiFoldersFill className="folder__icon blue" />
            <BiDotsVertical className="folder__options" />
          </div>
          <div className="folder__details">
            <h4 className="blue">Design</h4>
            <p>15 files</p>
          </div>
        </div>
        <div className="folder__card">
          <div className="folder__icons">
            <RiFoldersFill className="folder__icon blue" />
            <BiDotsVertical className="folder__options" />
          </div>
          <div className="folder__details">
            <h4 className="blue">Design</h4>
            <p>15 files</p>
          </div>
        </div>
        <div className="folder__card">
          <div className="folder__icons">
            <RiFoldersFill className="folder__icon blue" />
            <BiDotsVertical className="folder__options" />
          </div>
          <div className="folder__details">
            <h4 className="blue">Design</h4>
            <p>15 files</p>
          </div>
        </div>
        <div className="folder__card">
          <div className="folder__icons">
            <RiFoldersFill className="folder__icon blue" />
            <BiDotsVertical className="folder__options" />
          </div>
          <div className="folder__details">
            <h4 className="blue">Design</h4>
            <p>15 files</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folders;
