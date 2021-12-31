import React from "react";
import "./RecentFiles.css";

import { MdOutlinePermMedia } from "react-icons/md";

function RecentFiles() {
  return (
    <div className="files">
      <h2>Recent Files</h2>
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
