import React from "react";
import Feed from "../Feed/Feed";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";

function Profile() {
	return (
		<div>
			<div className='app__body'>
				<Sidebar />
				<Feed />
				<Widgets />
			</div>
		</div>
	);
}

export default Profile;
