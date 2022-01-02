import axios from "axios";
import React from "react";
import { getApi } from "../../utils/apis";
import "./InputOption.css";
function InputOption({ Icon, color, title, input, postTags }) {
	const axiosConfig = {
		withCredentials: true,
	};
	const sendPost = () => {
		axios
			.post(
				getApi("api/user/posts"),
				{
					message: input,
					tags: postTags,
				},
				axiosConfig
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className={title === "Send" ? "inputOptionSend" : "inputOption"}>
			{title === "Send" ? (
				<Icon
					className='inputOption__icon'
					style={{ color: color, fontSize: "20px" }}
					onClick={sendPost}
				/>
			) : (
				<div className=''>
					<input type='file' id='actual-btn' />
					<label htmlFor='actual-btn'>
						<Icon
							className='inputOption__icon'
							style={{ color: color, fontSize: "20px", cursor: "pointer" }}
						/>
					</label>
				</div>
			)}
		</div>
	);
}

export default InputOption;
