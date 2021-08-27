import React from "react";
import "./App.css";
import Feed from "./Feed/Feed";
import { selectUser } from "./features/userSlice";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";
import { useSelector } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
	const user = useSelector(selectUser);
	return (
		<Router>
			<div className='app'>
				{!user ? (
					<Routes />
				) : (
					<div className='app__body'>
						<Header />
						<Sidebar />
						<Feed />
						<Widgets />
					</div>
				)}
			</div>
		</Router>
	);
}

export default App;
