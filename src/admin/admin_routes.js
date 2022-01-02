import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import AdminSignup from "./AdminSignup/AdminSignup";
import AdminLogin from "./AdminLogin/AdminLogin";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

function AdminRoutes() {
  const loginStatus = useSelector((state) => state);
  return (
    <Switch>
      {/* <Route exact path="/">
        {loginStatus ? (
          <Redirect to="/admin" component={AdminDashboard} />
        ) : (
          <Redirect to="/admin-login" component={AdminLogin} />
        )}
      </Route> */}
      {loginStatus.isLoggedIn === false && loginStatus.JwtToken === "" ? (
        <div>
          <Route path="/admin-signup" exact component={AdminSignup} />
          <Route path="/admin-login" exact component={AdminLogin} />
          {/* <Route path="/admin" exact component={AdminDashboard} /> */}
        </div>
      ) : (
        <div>
          <Route path="/admin" exact component={AdminDashboard} />
        </div>
      )}
    </Switch>
  );
}
export default AdminRoutes;
