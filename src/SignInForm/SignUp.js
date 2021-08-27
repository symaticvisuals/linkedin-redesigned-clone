import React from "react";
import "./SignUp.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
function SignUp() {
	return (
		<div style={{ width: "100%" }}>
			<div className='signup'>
				<div className='signup__logo'>
					<Link to ='/'>
					<img src={logo} alt='' className='signup__brand'/>
					</Link>
					<h1>Make most of your Professional Life</h1>
				</div>
				<div className='signup__form'>
					<form action=''>
						<label htmlFor='name'>Full Name</label>
						<input
							type='text'
							name='name'
							id=''
							placeholder='Full Name'
							required
						/>
						<label htmlFor='email'>Email ID</label>
						<input type='email' name='email' id='' placeholder='Email ID' />
						<label htmlFor='profile'>Profile URL</label>
						<input
							type='text'
							name='profile'
							id=''
							placeholder='Profile Url (if any)'
						/>
						<label htmlFor='designation'>Designation</label>
						<input
							type='text'
							name='designation'
							id=''
							placeholder='Your Designation'
						/>

						<button type='submit'>Sign Up</button>
					</form>
					<p>Already a Member?</p>
					<span>Sign In Now</span>
				</div>
			</div>
			<div style={{ display: "flex", height: "10vh", alignItems: "flex-end" }}>
				<div className='signup__footer'>
					<p>Developed by Deepanshu Goel on React</p>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
