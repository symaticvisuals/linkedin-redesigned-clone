import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./AdminLogin.css";

import logo from "../../images/logo.png";
import axios from "axios";
import { getApi } from "../../utils/apis";
import { adminLogin } from "../../features/adminSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

function AdminLogin() {
  const [loginAdmin, setLogin] = useState({});
  // const loginDetails = useSelector((state) => state.admin);
  // TODO: useSelector hook
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginAdmin);

    let axiosConfig = {
      withCredentials: true,
    };

    axios
      .post(
        getApi("api/admin/login"),
        {
          userName: `${loginAdmin.userName}`,
          password: `${loginAdmin.password}`,
        },
        axiosConfig
      )
      .then((res) => {
        console.log(res);
        dispatch(
          adminLogin({
            userName: res.data.data.userName,
            id: res.data.data.id,
            jwtToken: res.data.data.jwtToken,
            isLoggedIn: true,
          })
        );
        Cookies.set("jwtToken", res.data.data.jwtToken);
        Cookies.set("admin", JSON.stringify(res.data.data.userName));
      })
      .catch((err) => {
        console.log(err);
      });

    history.push({
      pathname: "/admin",
      state: { userName: loginAdmin.userName },
    });
  };

  return (
    <div className="admin__login">
      {/* {console.log(loginDetails)} */}
      <div className="admin__login__left">
        <img src={logo} alt="logo" className="linkedIn__logo" />
        <h1>
          Welcome to <br /> Admin Login Panel
        </h1>
        <p>Login to access your dashboard...</p>
      </div>

      <div className="admin__login__right">
        <h1>Login</h1>
        <form className="admin__form">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setLogin({ ...loginAdmin, userName: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLogin({ ...loginAdmin, password: e.target.value })
            }
            required
          />
          <button onClick={handleSubmit} className="submit-button">
            Login
          </button>
          {/* <Link to="/admin" onClick={handleSubmit} className="submit-button">
            Login
          </Link> */}
        </form>
        <div className="admin__signup__button">
          <p>
            Not on LinkedIn? &nbsp;
            <a href="/admin-signup">Sign-up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
