import React from "react";
import "../../styles/index.css";
import PropTypes from "prop-types";

export const ToDoItem = (props) => {
	return <div ClassName="toDoElement shadow px-4 py-1">{props.task}</div>;
};

ToDoItem.propTypes = {
	task: PropTypes.string,
};
