import React from "react";
import "./modal-window.scss";

const modalWindow = (props) => {
	return (
		<div onClick={props.close} className="modal-window">
			{props.children && props.children}
		</div>
	);
};
export default modalWindow;
