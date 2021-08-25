import { Avatar, Divider } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
function Post({ feedPost }) {
	return (
		<div className='post'>
			<div className='post__profileSection'>
				<Avatar src={feedPost.profile} />
				<div className='profileSection__details'>
					<h5>{feedPost.name}</h5>
					<p>{feedPost.designation}</p>
				</div>
			</div>
			<Divider />
			<div className='post__messageSection'>
				<p>{feedPost.message}</p>
				<img
					src='https://media-exp1.licdn.com/dms/image/sync/C4D27AQHJZTxrWNGX8Q/articleshare-shrink_800/0/1628766691193?e=1629932400&v=beta&t=KCf8ueuPMttrhgh7NrO6RkJ6z2Vve-eYdZcbJRbnBlQ'
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
