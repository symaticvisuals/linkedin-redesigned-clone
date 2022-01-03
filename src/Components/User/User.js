import { Avatar } from "@material-ui/core";
import React from "react";
import Widgets from "../Widgets/Widgets";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import "./User.css";
import tags from "../../data/tags";
function User() {
	return (
		<div className='container__user'>
			<div className='user'>
				<div className='user__banner'></div>
				<div className='user__details'>
					<div className='user__avatar'>
						<Avatar
							src='https://media-exp1.licdn.com/dms/image/C4E03AQGRLl-M9c24TQ/profile-displayphoto-shrink_400_400/0/1639078446861?e=1646870400&v=beta&t=diw41bbyt9LNqtc1dJ0YJTDa4O6Oi4kgLuGsGZuZWFc'
							id='user__avatar'
						></Avatar>
						<div className='user__avatarDetails'>
							<h3>Deepanshu Goel</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptas nostrum quidem suscipit nobis dolor praesentium.
							</p>
							<div className='user__fans'>
								<div className='user__tags'>
									{tags.map((tag) => {
										return (
											<div className='user__tag'>
												<p>{tag}</p>
											</div>
										);
									})}
								</div>
								<div className='user__following'>
									<h5 style={{ marginRight: "5px" }}>1171 Followers</h5>
									<PeopleRoundedIcon />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{ marginTop: "5vh", marginLeft: "20px", width: "25vw" }}>
				<Widgets />
			</div>
		</div>
	);
}

export default User;
