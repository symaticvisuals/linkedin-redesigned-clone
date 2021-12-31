import React from "react";
import "./Sidebar.css";

import { PieChart } from "react-minimal-pie-chart";

import sidebarImage from "../../../../images/sidebar.jpeg";
import { MdOutlinePermMedia } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={sidebarImage} alt="" />
      <div className="sidebar__storage">
        <PieChart
          style={{ maxHeight: "8rem" }}
          lineWidth={20}
          paddingAngle={2}
          animate={true}
          className="sidebar__piechart"
          data={[
            { title: "Filled", value: 60, color: "#0e76a8" },
            { title: "Available", value: 40, color: "grey" },
          ]}
        />
        <div>
          <h2>Available Storage</h2>
          <p>40/100</p>
        </div>
      </div>
      <div className="progress">
        <div className="progress__container">
          <MdOutlinePermMedia className="progress__icon" />
          <div>
            <label>Progress</label>
            <br />
            <progress value="32" max="100"></progress>
          </div>
        </div>
        <div className="progress__container">
          <MdOutlinePermMedia className="progress__icon" />
          <div>
            <label>Progress</label>
            <br />
            <progress value="32" max="100"></progress>
          </div>
        </div>
        <div className="progress__container">
          <MdOutlinePermMedia className="progress__icon" />
          <div>
            <label>Progress</label>
            <br />
            <progress value="32" max="100"></progress>
          </div>
        </div>
        <div className="progress__container">
          <MdOutlinePermMedia className="progress__icon" />
          <div>
            <label>Progress</label>
            <br />
            <progress value="32" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
