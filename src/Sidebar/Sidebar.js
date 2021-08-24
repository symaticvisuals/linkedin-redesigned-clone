import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
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
					src='https://media-exp1.licdn.com/dms/image/C5616AQEYtNnMmUy4nQ/profile-displaybackgroundimage-shrink_350_1400/0/1601497096905?e=1635379200&v=beta&t=FCHQgvSxw-IgIQlyPX41KJj6jsYWkxGj0OJFCpwAMbQ'
					alt=''
				/>
				<Avatar
					src='https://media-exp1.licdn.com/dms/image/C4E03AQHRjLPA2E9-Gg/profile-displayphoto-shrink_400_400/0/1616477273357?e=1635379200&v=beta&t=uyHlw8T8hcTuHBfRKVe1aYnxIg_eQMAvikk8_UqglZY'
					className='sidebar__avatar'
				/>
				<div className='sidebar__designations'>
					<h2>Deepanshu Goel</h2>
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
