import { Avatar, Dialog } from "@material-ui/core";
import React, { createContext } from "react";
import Widgets from "../Widgets/Widgets";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import "./User.css";

import axios from "axios";
import { getApi } from "../../utils/apis";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import { useEffect } from "react";
import Slider from "react-slick";

import News from "../News/News";
import { useLocation } from "react-router-dom";
import EditProfile from "../EditProfile/EditProfile";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function useQuery() {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
}
const DialogUpdate = createContext();
function User() {
	const query = useQuery();
	const searchedUser = query.get("profile");
	const user = useSelector((state) => state.user.user._id);
	const [profile, setProfile] = React.useState({});
	const [interestFilters, setInterestFilters] = React.useState([]);
	const [bookmarks, setBookmarks] = React.useState([]);
	const [details, setDetails] = React.useState({});
	const [open, setOpen] = React.useState(false);
	const axiosConfig = {
		withCredentials: true,
	};
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const fetchUser = () => {
		if (searchedUser !== null) {
			axios
				.get(getApi(`api/user/search/byUserId/${searchedUser}`), axiosConfig)
				.then((res) => {
					setProfile(res.data.data.section);
					setInterestFilters(res.data.data.intrestFilters);
					if (res.data.data.number_of_postBookmarks > 0) {
						setBookmarks(res.data.data.post_bookmarks);
					}
					setDetails(res.data.data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			axios
				.get(getApi(`api/user/myProfile`), axiosConfig)
				.then((res) => {
					setProfile(res.data.data.section);
					setInterestFilters(res.data.data.intrestFilters);
					if (res.data.data.number_of_postBookmarks > 0) {
						setBookmarks(res.data.data.post_bookmarks);
					}
					setDetails(res.data.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	useEffect(() => {
		fetchUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchedUser]);

	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 3,
	};
	const history = useHistory();

	return (
		<div className='container__user'>
			<div className='user__header'>
				<div className='user'>
					<div className='user__banner'></div>
					<div className='user__details'>
						<div className='user__avatar'>
							<Avatar
								src='https://media-exp1.licdn.com/dms/image/C4E03AQGRLl-M9c24TQ/profile-displayphoto-shrink_400_400/0/1639078446861?e=1646870400&v=beta&t=diw41bbyt9LNqtc1dJ0YJTDa4O6Oi4kgLuGsGZuZWFc'
								id='user__avatar'
							></Avatar>
							<div className='user__avatarDetails'>
								{console.log(searchedUser)}
								<h3>{details.firstName + " " + details.lastName}</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptas nostrum quidem suscipit nobis dolor praesentium.
								</p>
								<div className='user__fans'>
									<div className='user__following'>
										<h5 style={{ marginRight: "5px" }}>1171 Followers</h5>
										<PeopleRoundedIcon />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='user__about'>
					<div
						className=''
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<h3>About Me</h3>

						{searchedUser === user || history.location.pathname === "/user" ? (
							<div className='edit__icon' onClick={handleClickOpen}>
								<EditRoundedIcon id='edit' />
								<Dialog
									fullWidth={true}
									maxWidth='sm'
									open={open}
									onClose={handleClose}
									aria-labelledby='max-width-dialog-title'
								>
									<DialogUpdate.Provider value={{ open, setOpen }}>
										<EditProfile />
									</DialogUpdate.Provider>
								</Dialog>
							</div>
						) : null}
					</div>
					<p>{profile && profile.intro}</p>
					<h3 style={{ marginTop: "15px" }}>Interests</h3>
					<div className='user__tags'>
						{interestFilters.map((tag) => {
							return (
								<div className='user__tag'>
									<p>{tag}</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className='user__posts'>
					<h3>Posts</h3>
					<div>
						<Slider {...settings}>
							{bookmarks.map((bookmark) => (
								<div className='bookmark'>
									<div className='bookmark__image'>
										<img
											// src={`https://linkedin-redesigned-server.herokuapp.com/images/${bookmark.image}`}
											src='https://media-exp1.licdn.com/dms/image/C4E22AQHHqdTisQsXsQ/feedshare-shrink_800/0/1633416438991?e=1643846400&v=beta&t=kfGdqefHs0tlPPv0Qc8qgkMXqgIswhdEN-bTEpaLrCA'
											alt='post'
											style={{
												width: "100%",
												height: "30vh",
												objectFit: "cover",
												borderRadius: "10px 10px 0 0",
											}}
										/>
										<div className='bookmark__message'>
											<h5>{bookmark.message}</h5>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
			<div style={{ marginTop: "5vh", marginLeft: "20px" }}>
				<Widgets />
				<News />
			</div>
		</div>
	);
}

export { User, DialogUpdate };
