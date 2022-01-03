import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { getApi } from "../../../../utils/apis";

function AllUsers() {
  let [response, setResponse] = useState({});
  const fetchData = (e) => {
    let axiosConfig = {
      withCredentials: true,
    };

    axios
      .get(getApi("api/admin/allUsers"), {}, axiosConfig)
      .then((res) => {
        console.log(res);
        setResponse(res.data);
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
      <div className="user__details">
        <h3>{response.firstName}</h3>
        <h3>{response.lastName}</h3>
      </div>
    </div>
  );
}

export default AllUsers;
