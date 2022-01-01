import React from "react";
import "./InputOption.css";
function InputOption({ Icon, color, title }) {
	return (
		<div className='inputOption'>
			<Icon
				className='inputOption__icon'
				style={{ color: color, fontSize: "20px" }}
			/>
			<h6>{title}</h6>
		</div>
	);
}

export default InputOption;
