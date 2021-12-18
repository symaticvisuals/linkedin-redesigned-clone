import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser, login, register } from "../../features/userSlice";

function SignUp() {
	const [registerUser, setRegister] = useState({});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(registerUser);
		axios({
			method: "post",
			url: "http://localhost:3001/api/user/register",

			data: {
				email: `${registerUser.email}`,
				firstName: `${registerUser.fname}`,
				lastName: `${registerUser.lname}`,
				designation: "student",
				education: "bachelor",
				userName: `${registerUser.username}`,
				password: `${registerUser.password}`,
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
		dispatch(register(registerUser));
		dispatch(login({ isLoggedIn: true }));
	};

	return (
		<div style={{ width: "100%" }}>
			<div className='signup'>
				<div className='signup__form'>
					<form action=''>
						<label htmlFor='name'>First Name</label>
						<input
							type='text'
							name='fname'
							id='fname'
							placeholder='First Name'
							required
							onChange={(e) =>
								setRegister({ ...registerUser, fname: e.target.value })
							}
						/>
						<label htmlFor='name'>Last Name</label>
						<input
							type='text'
							name='lname'
							id='lname'
							placeholder='Last Name'
							required
							onChange={(e) =>
								setRegister({ ...registerUser, lname: e.target.value })
							}
						/>
						<label htmlFor='email'>Email ID</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Last Name'
							required
							onChange={(e) =>
								setRegister({ ...registerUser, email: e.target.value })
							}
						/>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							name='username'
							id='username'
							placeholder='Username'
							onChange={(e) =>
								setRegister({ ...registerUser, username: e.target.value })
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
								setRegister({ ...registerUser, password: e.target.value })
							}
						/>

						<button onClick={handleSubmit}>Sign Up</button>
					</form>
					<p>Already a Member?</p>
					<span>
						<Link className='signup__link' to='/login'>
							Login Now
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
