import React, { useEffect, useState } from "react";
import "./RecentFiles.css";

// import { MdOutlinePermMedia } from "react-icons/md";
import { Link } from "react-router-dom";
import { getApi } from "../../../../utils/apis";
import axios from "axios";
import PostActivate from "../PostActivate/PostActivate";

function RecentFiles() {
  let [responsePosts, setResponsePosts] = useState([]);

  const fetchData = (e) => {
    let axiosConfig = {
      withCredentials: true,
    };

    axios
      .get(getApi("api/admin/allPosts?page=1&limit=4"), axiosConfig)
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
    <div className="files">
      <div className="users">
        <h2>Posts</h2>
        <Link to="/admin-posts" className="blue">
          See all posts
        </Link>
      </div>
      <br />
      <div className="activate__posts">
        {responsePosts.map((res) => (
            <PostActivate activated={res.active} details={{ res }} />
        ))}
      </div>
    </div>
  );
}

export default RecentFiles;
