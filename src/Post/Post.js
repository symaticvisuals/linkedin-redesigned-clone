import { Avatar, Divider } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
function Post({ name, designation, message, profile, timePosted }) {
	return (
		<div className='post'>
			<div className='post__profileSection'>
				<Avatar src={profile} />
				<div className='profileSection__details'>
					<h5>{name}</h5>
					<p>{designation}</p>
				</div>
			</div>
			<Divider />
			<div className='post__messageSection'>
				<p>{message}</p>

				<img
					src='https://www.nicepng.com/png/detail/20-203753_comic-boom-png-comic-book-boom-png.png'
					alt='postImage'
				></img>
			</div>
			<div className='post__reviews'>
				<div className='post__like'>
					<div className='like'>
						<ThumbUpOutlinedIcon
							style={{
								fontSize: "25px",
								marginRight: "5px",
							}}
						/>
						<h4>Like</h4>
					</div>
					<div className='comment'>
						<SmsOutlinedIcon style={{ fontSize: "25px", marginRight: "5px" }} />
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
