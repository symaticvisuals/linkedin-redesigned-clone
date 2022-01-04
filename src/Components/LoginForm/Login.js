import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, login } from "../../features/userSlice";
import logo from "../../images/logo.png";
import "./Login.css";

import { getApi } from "../../utils/apis";

import Cookies from "js-cookie";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Login() {
	const [loginUser, setLogin] = useState({});
	const dispatch = useDispatch();

	let history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(loginUser);

		let axiosConfig = {
			withCredentials: true,
		};

		axios
			.post(
				getApi("api/user/login"),
				{
					email: `${loginUser.email}`,
					password: `${loginUser.password}`,
				},
				axiosConfig
			)
			.then((res) => {
				dispatch(getUser(res.data.data.user));
				dispatch(login({ userJwt: res.data.data.jwt, isLoggedIn: true }));
				Cookies.set("jwt", res.data.data.jwt);
				Cookies.set("user", JSON.stringify(res.data.data.user));
				console.log(res);
				history.push("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div style={{ width: "100%" }}>
			<div className='signup'>
				<div className='signup__logo'>
					<Link to='/'>
						<img src={logo} alt='' className='signup__brand' />
					</Link>
					<h1>Make most of your Professional Life</h1>
				</div>
				<div className='signup__form'>
					<form action=''>
						<label htmlFor='email'>Email ID</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Last Name'
							required
							onChange={(e) =>
								setLogin({ ...loginUser, email: e.target.value })
							}
						/>

						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Enter Password'
							required
							onChange={(e) =>
								setLogin({ ...loginUser, password: e.target.value })
							}
						/>

						<button onClick={handleSubmit}>Sign In</button>
					</form>
					<p>Don't have a Account?</p>
					<span>
						<Link className='signup__link' to='/signup'>
							SignUp Now
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Login;
