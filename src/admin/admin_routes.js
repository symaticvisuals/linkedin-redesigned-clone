import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import AdminSignup from "./AdminSignup/AdminSignup";
import AdminLogin from "./AdminLogin/AdminLogin";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AllUsers from "./AdminComponents/Dashboard/AllUsers/AllUsers";
import AllPosts from "./AdminComponents/Dashboard/AllPosts/AllPosts";
import UserPostFilter from "./AdminComponents/Dashboard/UserPostFilter/UserPostFilter";
import MostLikedPosts from "./AdminComponents/Dashboard/MostLikedPosts/MostLikedPosts";
import AddFilter from "./AdminComponents/Dashboard/AdminFilters/AddFilter";

function AdminRoutes() {
  const loginStatus = useSelector((state) => state.admin);
  return (
    <Switch>
      {console.log(loginStatus)}
      {loginStatus.isLoggedIn === false && loginStatus.jwtToken === "" ? (
        <div>
          <Route path="/admin-signup" exact component={AdminSignup} />
          <Route path="/admin-login" exact component={AdminLogin} />
        </div>
      ) : (
        <div>
          <Route path="/admin" exact component={AdminDashboard} />
          <Route path="/admin-users" exact component={AllUsers} />
          <Route path="/admin-posts" exact component={AllPosts} />
          <Route path="/admin-filter" exact component={UserPostFilter} />
          <Route path="/admin-mostliked" exact component={MostLikedPosts} />
          <Route path="/admin-add-filter" exact component={AddFilter} />
        </div>
      )}
    </Switch>
  );
}
export default AdminRoutes;
