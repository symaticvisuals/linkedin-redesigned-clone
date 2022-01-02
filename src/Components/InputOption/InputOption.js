import React from "react";
import "./InputOption.css";
function InputOption({ Icon, color, title }) {
	return (
		<div className={title === "Send" ? "inputOptionSend" : "inputOption"}>
			{title === "Send" ? (
				<Icon
					className='inputOption__icon'
					style={{ color: color, fontSize: "20px" }}
				/>
			) : (
				<Icon
					className='inputOption__icon'
					style={{ color: color, fontSize: "20px" }}
				/>
			)}
		</div>
	);
}

export default InputOption;
