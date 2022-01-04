import axios from "axios";
import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImRadioUnchecked } from "react-icons/im";
import { getApi } from "../../../../utils/apis";

function FilterActive(activated) {
  const [active, isActive] = useState(activated.activated);

  const axiosConfig = {
    withCredentials: true,
  };

  const handleToggle = () => {
    isActive(!active);

    axios
      .put(
        getApi(`api/admin/filter/filterToggle/${activated.details.res._id}`),
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
    <div className="single__filter">
      <p>{activated.details.res.name}</p>
      {active ? (
        <BsFillCheckCircleFill htmlColor="#0080b4" onClick={handleToggle} />
      ) : (
        <ImRadioUnchecked onClick={handleToggle} htmlColor="#0080b4" />
      )}
    </div>
  );
}

export default FilterActive;
