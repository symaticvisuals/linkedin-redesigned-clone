import React from "react";
import "./Header.css";
import "./LoginHeader.css";
import logo from "../../images/logo.png";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import axios from "axios";
import HeaderOption from "../HeaderOption/HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getApi } from "../../utils/apis";
import Cookies from "js-cookie";
import { getUser, login } from "../../features/userSlice";
import { useEffect } from "react";
import { Avatar } from "@material-ui/core";

import { useLocation } from "react-router-dom";

function useQuery() {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
}
function Header() {
	const axiosConfig = {
		withCredentials: true,
	};
	const query = useQuery();
	const dispatch = useDispatch();
	const [search, setSearch] = React.useState("");
	const [searchResults, setSearchResults] = React.useState([]);
	const [trigger, setTrigger] = React.useState(false);
	const [resultbar, setResultbar] = React.useState(false);
	const searchResult = () => {
		if (search !== "") {
			axios
				.get(getApi(`api/user/search/byUserName/${search}`), axiosConfig)
				.then((res) => {
					console.log(res.data);
					if (res.data.success === false) {
						setTrigger(false);
					} else if (res.data.success) {
						setTrigger(true);
						setSearchResults(res.data.data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			searchResult();
			if (search !== "") {
				setResultbar(true);
			}
			if (search === "") {
				setResultbar(false);
			}
		}, 2000);
		return () => {
			clearTimeout(timer);
			searchResult(false);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);
	const handleLogout = (e) => {
		e.preventDefault();
		let axiosConfig = {
			withCredentials: true,
		};

		axios
			.get(getApi("api/user/logout"), axiosConfig)
			.then((res) => {
				console.log(res);
				Cookies.remove("jwt");
				Cookies.remove("user");
				dispatch(
					login({
						userJwt: "",
						isLoggedIn: false,
					})
				);
				dispatch(getUser({}));
			})
			.catch((err) => {
				alert(err);
			});
	};

	const loginStatus = useSelector((state) => state.user.login);

	return (
		<div>
			{loginStatus.userJwt !== "" && loginStatus.isLoggedIn === true ? (
				<div className='header'>
					<Link to='/'>
						<div className='header__left'>
							<img src={logo} alt='' />
						</div>
					</Link>
					<div className='header__middle'>
						<div className='header__search'>
							<input
								type='text'
								name='searchBar'
								id=''
								onChange={(e) => {
									setSearch(e.target.value);
								}}
							/>
							<SearchOutlinedIcon />
						</div>
						{resultbar === true ? (
							<div className='searchedUsers'>
								{trigger === false ? (
									<div className='searchedUsers__noResult'>No Result Found</div>
								) : (
									<Link
										to={`/account?profile=${searchResults._id}`}
										style={{ textDecoration: "none", color: "black" }}
										onClick={() => {
											query.set("profile", "");
											setResultbar(false);
											query.set("profile", searchResults._id);
										}}
									>
										<div className='searchedUser__result'>
											<Avatar
												src={`https://linkedin-redesigned-server.herokuapp.com/images/${searchResults.profilePicture}`}
											/>
											<div className='searchResult__name'>
												<h5>
													{searchResults.firstName +
														" " +
														searchResults.lastName}
												</h5>
												<p>{searchResults.designation}</p>
											</div>
										</div>
									</Link>
								)}
							</div>
						) : null}
					</div>
					<div className='header__right'>
						<HeaderOption Icon={HomeRoundedIcon} title='Home' link='' />
						<HeaderOption Icon={PeopleRoundedIcon} title='My Network' link='' />
						<HeaderOption Icon={WorkRoundedIcon} title='Jobs' link='' />
						<HeaderOption Icon={ChatRoundedIcon} title='Messaging' link='' />
						<HeaderOption
							Icon={NotificationsRoundedIcon}
							title='Notifications'
							link=''
						/>
						<HeaderOption
							avatar='https://media-exp1.licdn.com/dms/image/C4E03AQHRjLPA2E9-Gg/profile-displayphoto-shrink_400_400/0/1616477273357?e=1635379200&v=beta&t=uyHlw8T8hcTuHBfRKVe1aYnxIg_eQMAvikk8_UqglZY'
							title='Deepanshu'
							link='/user'
						/>
						<Link to='/'>
							<button className='loginHeader__button' onClick={handleLogout}>
								Logout
							</button>
						</Link>
					</div>
				</div>
			) : (
				<div>
					<div className='loginHeader' style={{ width: "100vw" }}>
						<Link to='/'>
							<div className='loginHeader__left'>
								<img src={logo} alt='' />
							</div>
						</Link>
						<div className='loginHeader__right'>
							<Link to='/login'>
								<button className='loginHeader__button'>Sign In</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Header;
