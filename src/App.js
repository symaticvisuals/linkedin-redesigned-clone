import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Header from "./Components/Header/Header";
import AdminRoutes from "./admin/admin_routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { getUser, login } from "./features/userSlice";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		if (Cookies.get("jwt") && Cookies.get("user")) {
			console.log("jwt cookie is present");
			const user = JSON.parse(Cookies.get("user"));
			dispatch(login({ isLoggedIn: true, userJwt: Cookies.get("jwt") }));

			dispatch(getUser(user));
		} else {
			console.log("jwt cookie is not present");
		}
	}, [dispatch]);
	return (
		<div className='app'>
			<Router>
				<Header />
				<AdminRoutes />
				<Routes />
			</Router>
		</div>
	);
}

export default App;
