import React from "react";
import "./AdminDashboard.css";

import ActivityChart from "../AdminComponents/Dashboard/ActivityChart/ActivityChart";
import Folders from "../AdminComponents/Dashboard/Folders/Folders";
import Navigation from "../AdminComponents/Dashboard/Navigation/Navigation";
import RecentFiles from "../AdminComponents/Dashboard/RecentFiles/RecentFiles";
import Sidebar from "../AdminComponents/Dashboard/Sidebar/Sidebar";

function AdminDashboard() {
  return (
    <div className="admin__dashboard">
      <Navigation className="dashboard__navigation" />
      <div className="dashboard__main">
        <Folders className="dashboard__folders" />
        <div className="main__sections">
          <RecentFiles className="dashboard__files" />
          <ActivityChart className="dashboard__activity" />
        </div>
      </div>
      <Sidebar className="dashboard__sidebar" />
    </div>
  );
}

export default AdminDashboard;
