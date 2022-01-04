import axios from "axios";
import React from "react";
import { useState } from "react";
import { getApi } from "../../../../utils/apis";
import AllFilters from "./AllFilters";

function AddFilter() {
  const [filter, addFilter] = useState("");

  let axiosConfig = {
    withCredentials: true,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filter);
    axios
      .post(
        getApi("api/admin/filter"),
        {
          name: `${filter.name}`,
        },
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
    <div className="half__width">
      <h2>Add New Filter</h2>
      <br />
      <form>
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Add filter"
          onChange={(e) => addFilter({ ...filter, name: e.target.value })}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <br />
      <h2>Added Filters</h2>
      <br />
      <AllFilters />
    </div>
  );
}

export default AddFilter;
