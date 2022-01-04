import axios from "axios";
import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImRadioUnchecked } from "react-icons/im";
import { getApi } from "../../../../utils/apis";

function PostActivate(activated) {
  const [active, isActive] = useState(activated.activated);

  const axiosConfig = {
    withCredentials: true,
  };

  const handleToggle = () => {
    isActive(!active);

    axios
      .put(
        getApi(`api/admin/toggeleUserPost/${activated.details.res._id}`),
        {},
        axiosConfig
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="files__container post__card activate__post">
      <div className="folder__icons">
        <img
          // src={`https://linkedin-redesigned-server.herokuapp.com/images/${res.profilePicture}`}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          alt="profile"
          className="progress__icon"
        />
        {active ? (
          <BsFillCheckCircleFill htmlColor="#0080b4" onClick={handleToggle} />
        ) : (
          <ImRadioUnchecked onClick={handleToggle} htmlColor="#0080b4" />
        )}
      </div>
      <div className="folder__details">
        <br />
        <p>{activated.details.res.message}</p>
      </div>
    </div>
  );
}

export default PostActivate;
