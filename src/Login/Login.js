import React from "react";
import "./Login.css";
import loginAnimation from "../utils/loginAnimation.json";
import Lottie from "react-lottie";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import Header from "../Header/Header";
function Login() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loginAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div>
			<Header />
			<div className='login'>
				<div className='login__left'>
					<h1>
						Welcome to <br />
						Linkedin Clone
					</h1>
					<h3>
						Developed by <b>Deepanshu Goel</b>
					</h3>
					<div className='login__buttons'>
						<div className='login__button'>
							Check out source code at <a href='/login'>Github</a>
						</div>
						<div className='login__button'>
							Check out my <a href='/login'>Personal Portfolio</a>
						</div>
					</div>
					<div className='login__socials'>
						<a href='https://www.linkedin.com/in/deepanshu-goel-053594126/'>
							<LinkedInIcon className='social' />
						</a>
						<a href='https://twitter.com/thedeepanshuweb'>
							<TwitterIcon className='social' />
						</a>
						<a href='https://github.com/symaticvisuals'>
							<GitHubIcon className='social' />
						</a>
					</div>
				</div>
				<div className='login__right'>
					<Lottie options={defaultOptions} width={400} height={400} />
				</div>
			</div>
		</div>
	);
}

export default Login;
