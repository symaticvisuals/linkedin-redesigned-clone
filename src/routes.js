import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./SignInForm/SignUp";
function Routes() {
	return (
		<Switch>
			<Route path='/' exact component={Login} />
			<Route exact path='/login' component={SignUp} />
            
		</Switch>
	);
}
export default Routes;
