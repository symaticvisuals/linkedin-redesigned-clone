import React from "react";
import { useSelector } from "react-redux";
import Feed from "../Feed/Feed";

import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";

function Profile() {
	const user = useSelector((state) => state.user.user);
	return (
		<div>
			<div className='app__body'>
				<Sidebar user={user} />
				<Feed user={user} />
				<Widgets />
			</div>
		</div>
	);
}

export default Profile;
