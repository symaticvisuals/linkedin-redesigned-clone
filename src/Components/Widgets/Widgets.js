import axios from "axios";
import React, { useEffect } from "react";

import { getApi } from "../../utils/apis";
import Suggestions from "../Suggestions/Suggestions";

import "./Widgets.css";
function Widgets() {
	const axiosConfig = {
		withCredentials: true,
	};

	const [suggestions, setSuggestions] = React.useState([]);
	const getSuggestions = () => {
		axios
			.get(getApi("api/user/getRandomUsers?limit=5&page=1"), axiosConfig)
			.then((res) => {
				setSuggestions(res.data.data);
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
			<h4 style={{ marginBottom: "10px" }}>People you might know</h4>
			<div className='random__users'>
				{suggestions &&
					suggestions.map((user, id) => <Suggestions user={user} id={id} />)}
			</div>
		</div>
	);
}

export default Widgets;
