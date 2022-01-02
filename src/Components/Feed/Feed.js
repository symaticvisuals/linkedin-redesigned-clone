import React, { useEffect } from "react";
import "./Feed.css";
import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { Avatar, Divider, TextField } from "@material-ui/core";
import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";
import axios from "axios";
import { getApi } from "../../utils/apis";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Autocomplete from "@material-ui/lab/Autocomplete";

import tags from "../../data/tags";
// import { posts } from "../../data/posts";
const useStyles = makeStyles((theme) => ({
	underline: {
		"&&&:before": {
			borderBottom: "none",
		},
		"&&:after": {
			borderBottom: "none",
		},
	},
}));
function Feed() {
	const [input, setInput] = React.useState("");
	const [count, setCount] = React.useState(0);
	const [posts, setPosts] = React.useState([]);
	const [postTags, setPostTags] = React.useState([]);
	const getAllPosts = () => {
		let axiosConfig = {
			withCredentials: true,
		};
		axios
			.get(getApi("api/user/posts/getPosts?page=1&limit=20"), axiosConfig)
			.then((res) => {
				console.log(res);
				const data = res.data.data;
				data.sort(function (a, b) {
					return new Date(a.time) - new Date(b.time);
				});
				setPosts(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		if (count === 0) {
			getAllPosts();
			setCount(1);
		}
		const timer = setTimeout(() => {
			getAllPosts();
		}, 60000);
		return () => clearTimeout(timer);
	}, [posts, count]);

	//FIXME: Fix : This is not working

	const sendPost = (e) => {
		e.preventDefault();

		setInput("");
	};

	const options = [
		{ Icon: InsertPhotoRoundedIcon, color: "#70B5F9", title: "Photo" },
		{ Icon: MovieCreationRoundedIcon, color: "#FFC107", title: "Video" },
		{ Icon: SendRoundedIcon, color: "#fff", title: "Send" },
	];
	const classes = useStyles();
	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<form action=''>
						<div className='feed__writeArea'>
							<Avatar src='https://media-exp1.licdn.com/dms/image/C4E03AQHRjLPA2E9-Gg/profile-displayphoto-shrink_400_400/0/1616477273357?e=1635379200&v=beta&t=uyHlw8T8hcTuHBfRKVe1aYnxIg_eQMAvikk8_UqglZY' />
							<textarea
								type='text'
								name=''
								placeholder='Share your thoughts...'
								id=''
								row='5'
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
						</div>
						<div className='feed__tags'>
							<div className='feed__autocomplete'>
								<Autocomplete
									multiple
									id='tags-outlined'
									options={tags}
									getOptionLabel={(option) => option.title}
									defaultValue={[tags[2]]}
									filterSelectedOptions
									onChange={(e, value) => {
										setPostTags(value);
									}}
									openOnFocus={true}
									renderInput={(params) => (
										<TextField
											{...params}
											placeholder='Tags'
											fullWidth='true'
										/>
									)}
								/>
							</div>
							<div className='feed__inputOptions'>
								{options.map((option) => (
									<InputOption
										key={option.Icon}
										Icon={option.Icon}
										color={option.color}
										title={option.title}
									/>
								))}
							</div>
						</div>
						{/* <Divider /> */}
					</form>
				</div>
			</div>
			<div className='feed_posts'>
				{posts.map(
					(
						{
							message,
							number_of_likes,
							number_of_comments,
							tags,
							time,
							active,
							postBy,
							likes,
							comments,
							image,
						},
						key
					) => (
						// TODO: Add the post by name and profile pic

						<Post
							key={key}
							message={message}
							number_of_likes={number_of_likes}
							number_of_comments={number_of_comments}
							tags={tags}
							time={time}
							active={active}
							postBy={postBy}
							likes={likes}
							comments={comments}
							image={image}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default Feed;
