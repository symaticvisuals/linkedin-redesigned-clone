import React from "react";
import "./Feed.css";
import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import { Avatar, Divider } from "@material-ui/core";
import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";
function Feed() {
	const sendPost = (e) => {
		e.preventDefault();
	};
	const [posts, setPosts] = React.useState([]);
	const options = [
		{ Icon: InsertPhotoRoundedIcon, color: "#70B5F9", title: "Photo" },
		{ Icon: MovieCreationRoundedIcon, color: "#FFC107", title: "Video" },
		{ Icon: WorkRoundedIcon, color: "#F44336", title: "Job" },
		{ Icon: AssignmentRoundedIcon, color: "#FF9800", title: "Write Article" },
	];
	const feedPost = [
		{
			name: "Deepanshu Goel",
			designation:
				"UI/UX Designer .Full-Stack Developer .Open Source at @CodeForCause .Webmaster IEEE .Campus Ambassador @Gemini Solutions",
			timePosted: "6h",
			profile:
				"https://media-exp1.licdn.com/dms/image/C4E03AQHRjLPA2E9-Gg/profile-displayphoto-shrink_400_400/0/1616477273357?e=1635379200&v=beta&t=uyHlw8T8hcTuHBfRKVe1aYnxIg_eQMAvikk8_UqglZY",
			message:
				"Hey eveyone,I am working on 𝗟𝗶𝗻𝗸𝗲𝗱I𝗻 𝗥𝗲𝗱𝗲𝘀𝗶𝗴𝗻 𝗖𝗹𝗼𝗻𝗲 with React Js. It will be going live soon!! Let me know your views 𝗶𝗳 𝘆𝗼𝘂 𝗴𝗼𝘁 𝘁𝗵𝗲 𝗽𝗼𝘄𝗲𝗿𝘀 to redesign anything on LinkedIn what it would be. Comment down your views, I will be happy to implement them on my clone.",
		},
		{
			name: "Deepanshu Goel",
			designation:
				"UI/UX Designer .Full-Stack Developer .Open Source at @CodeForCause .Webmaster IEEE .Campus Ambassador @Gemini Solutions",
			timePosted: "6h",
			profile:
				"https://media-exp1.licdn.com/dms/image/C4E03AQHRjLPA2E9-Gg/profile-displayphoto-shrink_400_400/0/1616477273357?e=1635379200&v=beta&t=uyHlw8T8hcTuHBfRKVe1aYnxIg_eQMAvikk8_UqglZY",
			message:
				"Hey eveyone,I am working on 𝗟𝗶𝗻𝗸𝗲𝗱I𝗻 𝗥𝗲𝗱𝗲𝘀𝗶𝗴𝗻 𝗖𝗹𝗼𝗻𝗲 with React Js. It will be going live soon!! Let me know your views 𝗶𝗳 𝘆𝗼𝘂 𝗴𝗼𝘁 𝘁𝗵𝗲 𝗽𝗼𝘄𝗲𝗿𝘀 to redesign anything on LinkedIn what it would be. Comment down your views, I will be happy to implement them on my clone.",
		},

		{
			name: "Deepanshu Goel",
			designation:
				"UI/UX Designer .Full-Stack Developer .Open Source at @CodeForCause .Webmaster IEEE .Campus Ambassador @Gemini Solutions",
			timePosted: "6h",
			profile:
				"https://media-exp1.licdn.com/dms/image/C4E03AQHRjLPA2E9-Gg/profile-displayphoto-shrink_400_400/0/1616477273357?e=1635379200&v=beta&t=uyHlw8T8hcTuHBfRKVe1aYnxIg_eQMAvikk8_UqglZY",
			message:
				"Hey eveyone,I am working on 𝗟𝗶𝗻𝗸𝗲𝗱I𝗻 𝗥𝗲𝗱𝗲𝘀𝗶𝗴𝗻 𝗖𝗹𝗼𝗻𝗲 with React Js. It will be going live soon!! Let me know your views 𝗶𝗳 𝘆𝗼𝘂 𝗴𝗼𝘁 𝘁𝗵𝗲 𝗽𝗼𝘄𝗲𝗿𝘀 to redesign anything on LinkedIn what it would be. Comment down your views, I will be happy to implement them on my clone.",
		},
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
							<button type='submit' className='feed__button'>
								Publish
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='feed_posts'>
				{feedPost.map((post) => (
					<Post feedPost={post} />
				))}
			</div>
		</div>
	);
}

export default Feed;
