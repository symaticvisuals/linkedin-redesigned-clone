import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import AdminSignup from "./AdminSignup/AdminSignup";
import AdminLogin from "./AdminLogin/AdminLogin";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AllUsers from "./AdminComponents/Dashboard/AllUsers/AllUsers";

function AdminRoutes() {
  const loginStatus = useSelector((state) => state.admin);
  return (
    <Switch>
      {/* <Route exact path="/">
        {loginStatus ? (
          <Redirect to="/admin" component={AdminDashboard} />
        ) : (
          <Redirect to="/admin-login" component={AdminLogin} />
        )}
      </Route> */}
      {console.log(loginStatus)}
      {loginStatus.isLoggedIn === false && loginStatus.jwtToken === "" ? (
        <div>
          <Route path="/admin-signup" exact component={AdminSignup} />
          <Route path="/admin-login" exact component={AdminLogin} />
          <Route path="/admin-users" exact component={AllUsers} />
          <Route path="/admin" exact component={AdminDashboard} />
        </div>
      ) : (
        <div>
          {/* <Route path="/admin" exact component={AdminDashboard} /> */}
          {/* <Route path="/admin-users" exact component={AllUsers} /> */}
        </div>
      )}
    </Switch>
  );
}
export default AdminRoutes;
