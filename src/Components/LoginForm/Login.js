import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, login } from "../../features/userSlice";
import logo from "../../images/logo.png";
import "./Login.css";
import axios from "axios";
function Login() {
	const [loginUser, setLogin] = useState({});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(loginUser);
		// dispatch(getUser());
		axios({
			method: "post",
			url: "https://linkedin-redesigned-server.herokuapp.com/api/user/login",
			data: {
				email: `${loginUser.email}`,
				password: `${loginUser.password}`,
			},
		})
			.then((res) => {
				console.log(res.data.data.user);
				dispatch(getUser(res.data.data.user));
				dispatch();
			})
			.catch((err) => {
				console.log(err);
			});
		dispatch(login({ isLoggedIn: true }));
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

						<button onClick={handleSubmit}>Sign Up</button>
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
