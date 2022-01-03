import React from "react";
import "./RecentFiles.css";

import { MdOutlinePermMedia } from "react-icons/md";
import { Link } from "react-router-dom";

function RecentFiles() {
  return (
    <div className="files">
      <div className="users">
        <h2>Users</h2>
        <Link to="/admin-posts" className="blue">See all users</Link>
      </div>
      <div className="progress">
        <div className="progress__container files__container">
          <MdOutlinePermMedia className="progress__icon" />
          <div>
            <h4>File Name</h4>
            <br />
            <p className="grey">Date and Time</p>
          </div>
        </div>
        <div className="progress__container files__container">
          <MdOutlinePermMedia className="progress__icon" />
          <div>
            <h4>File Name</h4>
            <br />
            <p className="grey">Date and Time</p>
          </div>
        </div>
        <div className="progress__container files__container">
          <MdOutlinePermMedia className="progress__icon" />
          <div>
            <h4>File Name</h4>
            <br />
            <p className="grey">Date and Time</p>
          </div>
        </div>
        <div className="progress__container files__container">
          <MdOutlinePermMedia className="progress__icon" />
          <div>
            <h4>File Name</h4>
            <br />
            <p className="grey">Date and Time</p>
          </div>
        </div>
        <div className="progress__container files__container">
          <MdOutlinePermMedia className="progress__icon" />
          <div>
            <h4>File Name</h4>
            <br />
            <p className="grey">Date and Time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentFiles;
