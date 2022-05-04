import React from "react";
import { useState } from "react/cjs/react.production.min";
import "../../styles/index.css";

export const ToDoForm = () => {
	const [toDolist, setToDoList] = useState([]);

	return (
		<React.Fragment>
			<input
				className="form-control px-5 py-2"
				placeholder="What needs to be done?"></input>
		</React.Fragment>
	);
};
