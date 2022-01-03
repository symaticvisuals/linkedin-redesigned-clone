import React from "react";
import "./Folders.css";

import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Folders() {
  const [active, isActive] = useState(true);

  return (
    <div className="Folders">
      <div className="users">
        <h2>Users</h2>
        <Link to="/admin-users" className="blue">See all users</Link>
      </div>
      <div className="folder__cards">
        <div className="folder__card">
          <div className="folder__icons">
            <FaUserCircle className="folder__icon blue" />
            <button
              active={active}
              onClick={() => isActive(!active)}
              className="activate__deactivate"
            >
              {active ? "Yes" : "No"}
            </button>
          </div>
          <div className="folder__details">
            <h4 className="blue">Name</h4>
            <p>@username</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folders;
