import React from "react";
import "./HeroPage.css";
import loginAnimation from "../../utils/loginAnimation.json";
import Lottie from "react-lottie";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

function HeroPage() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loginAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className='hero__main'>
			<div className='hero'>
				<div className='hero__left'>
					<h1>
						Welcome to <br />
						Linkedin Clone
					</h1>
					<h3>
						Developed by <b>Deepanshu Goel & Pearl Arora</b>
					</h3>
					<div className='hero__buttons'>
						<div className='hero__button'>
							Check out source code at{" "}
							<a href='https://github.com/symaticvisuals/linkedin-redesigned-clone'>
								Github
							</a>
						</div>
						<div className='hero__button'>
							Check out my{" "}
							<a href='http://deepanshuweb.in/'>Personal Portfolio</a>
						</div>
					</div>
					<div className='hero__socials'>
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
				<div className='hero__right'>
					<Lottie options={defaultOptions} width={400} height={400} />
				</div>
			</div>
		</div>
	);
}

export default HeroPage;
