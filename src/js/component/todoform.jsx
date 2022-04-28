import React from "react";
import "../../styles/index.css";

export const ToDoForm = () => {
	return (
		<React.Fragment>
			<input
				className="form-control px-5 py-2"
				placeholder="What needs to be done?"></input>
		</React.Fragment>
	);
};
