import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { getApi } from "../../../../utils/apis";
import UserActivate from "../UserActivate/UserActivate";
import "./AllUsers.css";

function AllUsers() {
  let [responseUsers, setResponseUsers] = useState([]);
  const fetchData = (e) => {
    let axiosConfig = {
      withCredentials: true,
    };

    axios
      .get(getApi("api/admin/allUsers"), axiosConfig)
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
    <div className="all__users">
      <h2>Users</h2>
      <div className="user__cards">
        {responseUsers.map((res) => (
          <UserActivate activated={res.isActive} details={{ res }} />
          // <div className="user__card">
          //   <div className="avatar__username">
          //     <img
          //       // src={`https://linkedin-redesigned-server.herokuapp.com/images/${res.profilePicture}`}
          //       src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          //       alt="profile"
          //     />
          //     <p>@{res.userName}</p>
          //   </div>
          //   <p>
          //     {res.firstName} {res.lastName}
          //   </p>
          //   <p>{res.email}</p>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default AllUsers;
