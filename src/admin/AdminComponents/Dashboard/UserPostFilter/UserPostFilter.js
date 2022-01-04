import axios from "axios";
import React, { useEffect, useState } from "react";
import { getApi } from "../../../../utils/apis";

import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from "@devexpress/dx-react-chart-material-ui";

function UserPostFilter() {
  let [responseData, setResponseData] = useState([]);

  const fetchData = (e) => {
    let axiosConfig = {
      withCredentials: true,
    };

    axios
      .get(getApi("api/admin/data/userPostFilters"), axiosConfig)
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
    <div className="half__width">
      <br />
      <h2>User Post Filters</h2>
      <br />
      <Paper className="filter__cards">
        <Chart data={responseData}>
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries valueField="totalUsers" argumentField="_id" />
        </Chart>
      </Paper>
    </div>
  );
}

export default UserPostFilter;
