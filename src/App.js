import React, { useEffect } from "react";
import "./App.css";

import { useSelector } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Header from "./Components/Header/Header";
import AdminRoutes from "./admin/admin_routes";
import Cookies from "js-cookie";

function App() {
	// useEffect(() => {
	// 	if (Cookies.get("access_token") !== "") {
	// 		console.log("jwt cookie is present");
	// 		const user = JSON.parse(Cookies.get("user"));
	// 		dispatch(setJwt(Cookies.get("jwt")));
	// 		if (user.newUser === 1) {
	// 			dispatch(setNewUser(user));
	// 		} else {
	// 			dispatch(setLoggedUser(user));
	// 		}
	// 	} else {
	// 		console.log("jwt cookie is not present");
	// 	}
	// }, [dispatch]);
	return (
		<div className='app'>
			<Router>
				<AdminRoutes />
				<Header />
				<Routes />
			</Router>
		</div>
	);
}

export default App;
