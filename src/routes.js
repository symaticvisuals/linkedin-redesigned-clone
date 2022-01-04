import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import HeroPage from "./Components/HeroPage/HeroPage";
import Login from "./Components/LoginForm/Login";

import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUpForm/SignUp";
import User from "./Components/User/User";
import { useLocation } from "react-router-dom";
function useQuery() {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
}
function SearchUserByName() {
	let query = useQuery();
}

function userProfiles({ user }) {}
function Routes() {
	const loginStatus = useSelector((state) => state.user.login);
	return (
		<Switch>
			{loginStatus.isLoggedIn === false && loginStatus.userJwt === "" ? (
				<div>
					<Route path='/' exact component={HeroPage} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={SignUp} />
				</div>
			) : (
				<div>
					<Route path='/' exact component={Profile} />
					<Route exact path='/user' component={User} />
				</div>
			)}
		</Switch>
	);
}
export default Routes;
