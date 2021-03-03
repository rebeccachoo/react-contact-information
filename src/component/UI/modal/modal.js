import React from "react";
import "./modal.scss";

const modal = (props) => {
	return (
		<div
			onClick={props.close}
			className="modal transparent-black-background"
		></div>
	);
};
export default modal;
