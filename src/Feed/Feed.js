import React, { useEffect } from "react";
import "./Feed.css";
import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import { Avatar, Divider } from "@material-ui/core";
import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";
import { db } from "../firebase";
import firebase from "firebase";

function Feed() {
	const [input, setInput] = React.useState("");
	const [posts, setPosts] = React.useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timePosted", "desc")
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();
		db.collection("posts").add({
			name: "Deepanshu Goel",
			designation:
				"UI/UX Designer .Full-Stack Developer .Open Source at @CodeForCause .Webmaster IEEE .Campus Ambassador @Gemini Solutions",
			timePosted: firebase.firestore.FieldValue.serverTimestamp(),
			message: input,
			profile:
				"https://media-exp1.licdn.com/dms/image/C4E03AQHRjLPA2E9-Gg/profile-displayphoto-shrink_400_400/0/1616477273357?e=1635379200&v=beta&t=uyHlw8T8hcTuHBfRKVe1aYnxIg_eQMAvikk8_UqglZY",
		});
		setInput("");
	};

	const options = [
		{ Icon: InsertPhotoRoundedIcon, color: "#70B5F9", title: "Photo" },
		{ Icon: MovieCreationRoundedIcon, color: "#FFC107", title: "Video" },
		{ Icon: WorkRoundedIcon, color: "#F44336", title: "Job" },
		{ Icon: AssignmentRoundedIcon, color: "#FF9800", title: "Write Article" },
	];

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
						<Divider />
						<div className='feed__inputOptions'>
							{options.map((option) => (
								<InputOption
									key={option.Icon}
									Icon={option.Icon}
									color={option.color}
									title={option.title}
								/>
							))}
							<button type='submit' className='feed__button' onClick={sendPost}>
								Publish
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='feed_posts'>
				{posts.map(
					({
						id,
						data: { name, designation, message, profile, timePosted },
					}) => (
						<Post
							key={id}
							name={name}
							designation={designation}
							profile={profile}
							message={message}
							timePosted={timePosted}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default Feed;
