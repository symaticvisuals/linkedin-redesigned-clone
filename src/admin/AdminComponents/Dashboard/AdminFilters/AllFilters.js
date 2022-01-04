import axios from "axios";
import React, { useEffect, useState } from "react";
import { getApi } from "../../../../utils/apis";
import FilterActive from "./FilterActive";

function AllFilters() {
  let [responseData, setResponseData] = useState([]);

  const fetchData = (e) => {
    let axiosConfig = {
      withCredentials: true,
    };

    axios
      .get(getApi("api/admin/filter"), axiosConfig)
      .then((res) => {
        setResponseData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="all__filters">
      {responseData.map((res) => (
        <FilterActive activated={res.isActive} details={{ res }} />
        // <div className="single__filter">
        //   <p>{res.name}</p>
        // </div>
      ))}
    </div>
  );
}

export default AllFilters;
