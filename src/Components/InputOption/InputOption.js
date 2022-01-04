import { Button } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { getApi } from "../../utils/apis";
import "./InputOption.css";

// const fs = require("fs");

function InputOption({ Icon, color, title, input, postTags }) {
	const axiosConfig = {
		withCredentials: true,
	};

	const [upload, setUpload] = React.useState(null);
	const uploadRequest = async (e) => {
		console.log("in");
		if (upload !== "") {
			axios
				.post(
					getApi("api/user/posts/imageUpload"),
					{
						image: new Image(upload),
					},
					axiosConfig
				)
				.then((res) => {
					console.log(res);
					setUpload("");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const sendPost = (e) => {
		document.getElementById("image__form").onSubmit = uploadRequest;

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
					<form
						action='https://linkedin-redesigned-server.herokuapp.com/api/user/posts/imageUpload'
						id='image__form'
						name='image__form'
						enctype='multipart/form-data'
						method='post'
						style={{ display: "flex", alignItems: "flex-end" }}
						// onSubmit={afterSubmission}
					>
						<input
							type='file'
							id='actual-btn'
							name='image'
							accept={title === "Video" ? ".mp4, .mov" : ".jpg, .jpeg, .png"}
							// onChange={(e)=>{
							// 	imageUpload(e.target)
							// }}
							multiple
						/>

						<label htmlFor='actual-btn'>
							<Icon
								className='inputOption__icon'
								style={{ color: color, fontSize: "20px", cursor: "pointer" }}
							/>
						</label>
						<Button type='submit' variant='outlined' color='primary'>
							Upload
						</Button>
					</form>
				</div>
			)}
		</div>
	);
}

export default InputOption;
