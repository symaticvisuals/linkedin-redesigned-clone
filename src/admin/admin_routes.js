import React from "react";

import { Switch, Route } from "react-router-dom";

import AdminSignup from "./AdminSignup/AdminSignup";
import AdminLogin from "./AdminLogin/AdminLogin";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

function AdminRoutes() {
  return (
    <Switch>
      <Route path="/admin-signup" exact component={AdminSignup} />
      <Route path="/admin-login" exact component={AdminLogin} />
      <Route path="/admin" exact component={AdminDashboard} />
    </Switch>
  );
}
export default AdminRoutes;
