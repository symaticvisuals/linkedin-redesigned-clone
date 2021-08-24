import React from "react";
import "./Header.css";
import logo from "../src/images/logo.png";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";

import HeaderOption from "./HeaderOption";
function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img src={logo} alt='' />
			</div>
			<div className='header__middle'>
				<div className='header__search'>
					<input type='text' name='' id='' />
					<SearchOutlinedIcon />
				</div>
			</div>
			<div className='header__right'>
				<HeaderOption Icon={HomeRoundedIcon} title='Home' />
				<HeaderOption Icon={PeopleRoundedIcon} title='My Network' />
				<HeaderOption Icon={WorkRoundedIcon} title='Jobs' />
				<HeaderOption Icon={ChatRoundedIcon} title='Messaging' />
				<HeaderOption Icon={NotificationsRoundedIcon} title='Notifications' />
				<HeaderOption
					avatar='https://media-exp1.licdn.com/dms/image/C4E03AQHRjLPA2E9-Gg/profile-displayphoto-shrink_400_400/0/1616477273357?e=1635379200&v=beta&t=uyHlw8T8hcTuHBfRKVe1aYnxIg_eQMAvikk8_UqglZY'
					title='Deepanshu'
				/>
			</div>
		</div>
	);
}

export default Header;
