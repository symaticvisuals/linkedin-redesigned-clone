import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { getApi } from "../../../../utils/apis";
import PostActivate from "../PostActivate/PostActivate";
import "./AllPosts.css";

function AllPosts() {
  let [responsePosts, setResponsePosts] = useState([]);
  const fetchData = (e) => {
    let axiosConfig = {
      withCredentials: true,
    };

    axios
      .get(getApi("api/admin/allPosts"), axiosConfig)
      .then((res) => {
        setResponsePosts(res.data.data);
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
      <h2>Posts</h2>
      <div className="post__cards">
        {responsePosts.map((res) => (
          <PostActivate activated={res.active} details={{ res }} />
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
