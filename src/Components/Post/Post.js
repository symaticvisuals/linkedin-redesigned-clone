import { Avatar, Badge, Divider } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
function Post({
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
}) {
	return (
		// TODO: Add Comment and Like buttons
		<div className='post'>
			<div className='post__messageSection'>
				{!image ? (
					<img
						// src={`https://linkedin-redesigned-server.herokuapp.com/images/${image}`}
						src='https://designshack.net/wp-content/uploads/ADL-Clean-Instagram-Post-Templates.jpg'
						alt='postImage'
					></img>
				) : null}
			</div>
			<div className='post__profileSection'>
				<Badge
					color={active === 0 ? "primary" : "secondary"}
					overlap='circular'
					variant='dot'
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
				>
					<Avatar src={postBy.profilePicture} />
				</Badge>
				<div className='profileSection__details'>
					<h5>{postBy.userName}</h5>
					<p>Student</p>
				</div>
			</div>
			<p>{message}</p>
			<div className='post__reviews'>
				<div className='post__like'>
					<div className='like'>
						<ThumbUpOutlinedIcon
							style={{
								fontSize: "20px",
								marginRight: "5px",
							}}
						/>
						<h4>Like</h4>
					</div>
					<div className='comment'>
						<SmsOutlinedIcon style={{ fontSize: "20px", marginRight: "5px" }} />
						<h4>Comment</h4>
					</div>
				</div>

				<div className='save'>
					<BookmarkBorderOutlinedIcon style={{ fontSize: "25px" }} />
				</div>
			</div>
		</div>
	);
}

export default Post;
