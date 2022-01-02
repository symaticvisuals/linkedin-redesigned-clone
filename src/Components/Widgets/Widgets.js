import { Avatar, Divider } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { getApi } from "../../utils/apis";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckIcon from "@material-ui/icons/Check";
import "./Widgets.css";
function Widgets() {
	const axiosConfig = {
		withCredentials: true,
	};
	const [follow, setFollow] = React.useState(false);
	const [suggestions, setSuggestions] = React.useState([]);
	const getSuggestions = () => {
		axios
			.get(getApi("api/user/getRandomUsers?limit=5&page=1"), axiosConfig)
			.then((res) => {
				setSuggestions(res.data.data);
				console.log(suggestions);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getSuggestions();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='widgets'>
			<h5>People you might know</h5>
			<div className='random__users'>
				{suggestions.map((user, id) => (
					<div>
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
								<CheckIcon
									onClick={(e) => setFollow(!follow)}
									htmlColor='#0080b4'
								/>
							)}
						</div>
						<Divider style={{ marginTop: "10px" }} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Widgets;
