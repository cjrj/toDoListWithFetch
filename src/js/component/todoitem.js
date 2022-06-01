import React from "react";
import "../../styles/index.css";
import PropTypes from "prop-types";

export const ToDoItem = (props) => {
	return (
		<div className="toDoElement px-1 py-1 d-flex d-row align-items-center justify-content-between">
			{props.task}
		</div>
	);
};

ToDoItem.propTypes = {
	task: PropTypes.object,
};
