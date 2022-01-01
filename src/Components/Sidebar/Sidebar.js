import { Avatar } from "@material-ui/core";
import React from "react";

import "./Sidebar.css";
function Sidebar(user) {
	const { firstName, lastName, profilePicture, designation } = user.user;
	const topics = [
		"reactjs",
		"programming",
		"softwareengineering",
		"design",
		"developer",
	];
	const recentItem = (topic) => (
		<div className='sidebar__recentItem'>
			<span className='sidebar__hash'>#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://i.pinimg.com/originals/f9/90/c4/f990c41be2d28c8c2420d5d68f7d84d2.jpg'
					alt=''
				/>

				<Avatar
					src={
						profilePicture
							? `https://linkedin-redesigned-server.herokuapp.com/images/${profilePicture}`
							: ""
					}
					className='sidebar__avatar'
				/>
				{console.log()}
				<div className='sidebar__designations'>
					{console.log(user)}
					<h2>{firstName + " " + lastName}</h2>
					<h5>
						UI/UX Designer .Full-Stack Developer .Open Source at @CodeForCause
						.Webmaster IEEE .Campus Ambassador @Gemini Solutions
					</h5>
				</div>
			</div>
			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who viewed you</p>
					<p className='sidebar__statNumber'>2543</p>
				</div>
				<div className='sidebar__stat'>
					<p>Views on Post</p>
					<p className='sidebar__statNumber'>3000</p>
				</div>
			</div>
			<div className='sidebar__button'>
				<p>Recent</p>
				{topics.map((topic) => recentItem(topic))}
			</div>
		</div>
	);
}

export default Sidebar;
