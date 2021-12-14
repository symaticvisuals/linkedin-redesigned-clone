import React from "react";

import { Switch, Route } from "react-router-dom";

import _App from "./_App";
function AdminRoutes() {
	return (
		<Switch>
			<Route path='/admin' exact component={_App} />
		</Switch>
	);
}
export default AdminRoutes;
