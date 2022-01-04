import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

import axios from "axios";
import { getApi } from "../../utils/apis";
import { useSelector } from "react-redux";
function Post({
	message,
	number_of_likes,
	number_of_comments,
	id,
	tags,
	time,
	active,
	postBy,
	likes,
	comments,
	image,
}) {
	const userId = useSelector((state) => state.user.user._id);
	const checkLike = () => {
		if (likes.filter((like) => like.likeBy._id === userId).length > 0) {
			return true;
		} else {
			return false;
		}
	};
	const [updatedComments, setUpdatedComments] = React.useState(comments);
	const [like, setLike] = React.useState(checkLike(likes));

	const [comment, setComment] = React.useState(false);
	const [bookmark, setBookmark] = React.useState(false);
	const [commentText, setCommentText] = React.useState("");
	const axiosConfig = {
		withCredentials: true,
	};
	const handleLike = () => {
		setLike(!like);
		console.log(`Like ${id}`);
		axios
			.put(getApi(`api/user/posts/likePost/${id}`), {}, axiosConfig)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const handleComment = () => {
		setComment(!comment);
	};
	const handleBookmark = () => {
		axios
			.put(getApi(`api/user/posts/bookmark/${id}`), {}, axiosConfig)
			.then((res) => {
				console.log(res);
				setUpdatedComments(res.data.data.comments.comments);
			})
			.catch((err) => {
				console.log(err);
			});
		setBookmark(!bookmark);
	};

	const addComment = () => {
		console.log(commentText);
		if (commentText !== "") {
			axios
				.put(
					getApi("api/user/posts/comment"),
					{
						comment: commentText,
						postId: id,
					},
					axiosConfig
				)
				.then((res) => {
					console.log(res);
					setUpdatedComments(res.data.data.comments.comments);
					console.log(res.data.data.comments.comments);
					setCommentText("");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	return (
		// TODO: Add Comment and Like buttons
		<div className='post'>
			<div
				className='post__imageSection'
				style={{
					background: `url(https://designshack.net/wp-content/uploads/ADL-Clean-Instagram-Post-Templates.jpg)`,
					// background: `url(https://linkedin-redesigned-server.herokuapp.com/images/${image})))`,
					height: "30vh",
					backgroundSize: "cover",
				}}
			>
				<Avatar
					src={`https://linkedin-redesigned-server.herokuapp.com/images/${postBy.profilePicture}`}
					className='post__avatar'
				/>
			</div>
			<div className='post__contentSection'>
				<p>{message}</p>
			</div>
			<div className='post__tags'>
				{tags.map((tag) => (
					<div className='post__tag'>
						<p>{tag}</p>
					</div>
				))}
			</div>
			<div className='post__interactions'>
				<div className='post__likecomm'>
					{like === false ? (
						<ThumbUpOutlinedIcon
							fontSize='small'
							htmlColor='#0077b5'
							className='post__icon'
							onClick={handleLike}
						/>
					) : (
						<ThumbUpAltIcon
							fontSize='small'
							htmlColor='#0077b5'
							className='post__icon'
							onClick={handleLike}
						/>
					)}

					<CommentOutlinedIcon
						fontSize='small'
						htmlColor='rgb(255, 166, 0)'
						className='post__icon'
						onClick={handleComment}
					/>
				</div>
				<div className='post__save'>
					{bookmark === false ? (
						<BookmarkBorderOutlinedIcon
							fontSize='small'
							htmlColor='red'
							className='post__icon'
							onClick={handleBookmark}
						/>
					) : (
						<TurnedInIcon
							fontSize='small'
							htmlColor='red'
							className='post__icon'
							onClick={handleBookmark}
						/>
					)}
				</div>
			</div>
			{comment === true ? (
				<div className='post__commentSection'>
					<div className='post__writeComment'>
						<input
							type='text'
							placeholder='Write a comment'
							value={commentText}
							onChange={(e) => setCommentText(e.target.value)}
						/>
						<SendRoundedIcon
							htmlColor='#0080b4'
							fontSize='small'
							style={{ marginRight: "10px", cursor: "pointer" }}
							onClick={addComment}
						/>
					</div>
					{updatedComments.map((comment, key) => (
						<div className='post__comment'>
							<div className='comment__avatar'>
								<Avatar
									src={`https://linkedin-redesigned-server.herokuapp.com/images/${comment.commentBy.profilePicture}`}
									style={{ height: "30px", width: "30px", marginRight: "5px" }}
								/>
								<div className='comment__name'>
									<h6>{comment.commentBy.firstName}</h6>
									<p>{comment.commentBy.userName}</p>
								</div>
							</div>
							<p>{comment.comment}</p>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
}

export default Post;
