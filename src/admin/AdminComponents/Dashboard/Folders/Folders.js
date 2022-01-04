import React, { useEffect } from "react";
import "./Folders.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getApi } from "../../../../utils/apis";
import UserActivate from "../UserActivate/UserActivate";

function Folders() {
  let [responseUsers, setResponseUsers] = useState([]);
  const fetchData = (e) => {
    let axiosConfig = {
      withCredentials: true,
    };

    axios
      .get(getApi("api/admin/allUsers?page=1&limit=4"), axiosConfig)
      .then((res) => {
        setResponseUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Folders">
      <div className="users">
        <h2>Users</h2>
        <Link to="/admin-users" className="blue">
          See all users
        </Link>
      </div>
      <div className="folder__cards">
        {responseUsers.map((res) => (
          <UserActivate activated={res.isActive} details={{ res }} />
        ))}
      </div>
    </div>
  );
}

export default Folders;
