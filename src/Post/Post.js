import { Avatar, Divider } from "@material-ui/core";
import React from "react";
import "./Post.css";
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
            <div className="post__reviews">
                
            </div>
		</div>
	);
}

export default Post;
