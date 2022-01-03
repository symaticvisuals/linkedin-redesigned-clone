import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderOption.css";
function HeaderOption({ avatar, Icon, title, link }) {
	return (
		<Link to={`${link}`}>
			<div className='headerOption'>
				{Icon && <Icon className='headerOption__icon' />}
				{avatar && <Avatar className='headerOption__icon' src={avatar} />}

				{/* <h3 className='headerOption__title'>{title}</h3> */}
			</div>
		</Link>
	);
}

export default HeaderOption;
