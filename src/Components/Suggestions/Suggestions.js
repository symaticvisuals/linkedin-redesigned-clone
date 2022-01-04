import { Avatar } from "@material-ui/core";
import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckIcon from "@material-ui/icons/Check";
import "./Suggestions.css";
import { getApi } from "../../utils/apis";
import axios from "axios";
function Suggestions({ user }, id) {
	const [follow, setFollow] = React.useState(false);
	const followRequest = () => {
		let axiosConfig = {
			withCredentials: true,
		};
		axios
			.put(getApi(`api/user/follow/${user._id}`), {}, axiosConfig)
			.then((res) => {
				console.log(res);
				setFollow(!follow);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className='random__user'>
			<div className='random__details'>
				<Avatar
					style={{
						height: "30px",
						width: "30px",
					}}
					key={id}
					src={`https://linkedin-redesigned-server.herokuapp.com/images/${user.profilePicture}`}
				/>
				<div className='user__details'>
					<h6>{user.lastName}</h6>
					<p>{user.designation}</p>
				</div>
			</div>
			{follow === false ? (
				<AddCircleOutlineIcon htmlColor='#0080b4' onClick={followRequest} />
			) : (
				<CheckIcon htmlColor='#0080b4' onClick={followRequest} />
			)}
		</div>
	);
}

export default Suggestions;
