import React, { useState } from "react";
import "./AdminSignup.css";

import logo from "../../images/logo.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getApi } from "../../utils/apis";
import { adminLogin, adminRegister } from "../../features/adminSlice";

function AdminSignup() {
  const [registerAdmin, setRegister] = useState({});
  const dispatch = useDispatch();

  let axiosConfig = {
    withCredentials: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerAdmin);
    axios
      .post(
        getApi("api/admin/register"),
        {
          name: `${registerAdmin.name}`,
          mobile: `${registerAdmin.mobile}`,
          user: `${registerAdmin.user}`,
          tags: "admin",
          userName: `${registerAdmin.username}`,
          password: `${registerAdmin.password}`,
        },
        axiosConfig
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(adminRegister(registerAdmin));
    dispatch(adminLogin({ isLoggedIn: true }));
  };

  return (
    <div className="admin__login">
      <div className="admin__login__left">
        <img src={logo} alt="logo" className="linkedIn__logo" />
        <h1>
          Welcome to <br /> Admin Sign-up Panel
        </h1>
        <p>Sign-up to access admin dashboard...</p>
      </div>

      <div className="admin__login__right">
        <h1>Sign-Up</h1>
        <form className="admin__form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            onChange={(e) =>
              setRegister({ ...registerAdmin, name: e.target.value })
            }
          />
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="Mobile"
            required
            onChange={(e) =>
              setRegister({ ...registerAdmin, mobile: e.target.value })
            }
          />
          <label for="cars">
            User:
            <select
              name="user"
              onChange={(e) =>
                setRegister({ ...registerAdmin, user: e.target.value })
              }
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="doctor">Doctor</option>
            </select>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            onChange={(e) =>
              setRegister({ ...registerAdmin, userName: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(e) =>
              setRegister({ ...registerAdmin, password: e.target.value })
            }
          />
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Sign-up
          </button>
        </form>
        <div className="admin__signup__button">
          <p>
            Already on LinkedIn? &nbsp;
            <Link to="/admin-login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminSignup;
