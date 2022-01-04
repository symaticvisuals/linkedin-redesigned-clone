import axios from "axios";
import React, { useEffect, useState } from "react";

import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { getApi } from "../../../../utils/apis";

function MostLikedPosts() {
  let [responseData, setResponseData] = useState([]);

  const fetchData = (e) => {
    let axiosConfig = {
      withCredentials: true,
    };

    axios
      .get(getApi("api/admin/data/count_user_posts_likes"), axiosConfig)
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
          <BarSeries valueField="totalLikes" argumentField="_id" />
        </Chart>
      </Paper>
    </div>
  );
}

export default MostLikedPosts;
