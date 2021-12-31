import React from "react";
import "./AdminSignup.css";

import logo from "../../images/logo.png";

function AdminSignup() {
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
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Mobile" required />
          <label for="cars">
            User:
            <select name="user">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="doctor">Doctor</option>
            </select>
          </label>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit-button">
            Sign-up
          </button>
        </form>
        <div className="admin__signup__button">
          <p>
            Already on LinkedIn? &nbsp;
            <a href="/admin-login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminSignup;
