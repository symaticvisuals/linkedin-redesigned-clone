import React, { useState, useDispatch, useSelector } from "react";
import "./AdminLogin.css";

import logo from "../../images/logo.png";
import axios from "axios";

function AdminLogin() {
  const [loginUser, setLogin] = useState({});
  // const dispatch = useDispatch();
  // const loginDetails = useSelector((state) => state.user.login);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginUser);
    // dispatch(getUser());
    // instance({
    // 	method: "post",
    // 	url: "api/user/login",
    // 	data: {
    // 		email: `${loginUser.email}`,
    // 		password: `${loginUser.password}`,
    // 	},
    // })
    let axiosConfig = {
      withCredentials: true,
    };

    axios
      .post(
        "https://linkedin-redesigned-server.herokuapp.com/api/admin/login",
        {
          userName: `${loginUser.userName}`,
          password: `${loginUser.password}`,
        },
        axiosConfig
      )
      .then((res) => {
        console.log(res);
        // console.log(loginDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="admin__login">
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
            onChange={(e) => setLogin({ ...loginUser, userName: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLogin({ ...loginUser, password: e.target.value })
            }
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="submit-button"
          >
            Login
          </button>
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
