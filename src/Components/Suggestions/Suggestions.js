import { Avatar } from "@material-ui/core";
import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckIcon from "@material-ui/icons/Check";
import "./Suggestions.css";
function Suggestions({ user }, id) {
	const [follow, setFollow] = React.useState(false);
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
					<h6>Deepanshu Goel</h6>
					<p>{user.designation}</p>
				</div>
			</div>
			{follow === false ? (
				<AddCircleOutlineIcon
					htmlColor='#0080b4'
					onClick={(e) => setFollow(!follow)}
				/>
			) : (
				<CheckIcon onClick={(e) => setFollow(!follow)} htmlColor='#0080b4' />
			)}
		</div>
	);
}

export default Suggestions;
