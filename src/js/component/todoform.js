import React from "react";
import "../../styles/index.css";
import { ToDoItem } from "./todoitem";
import { useState } from "react";
export const ToDoForm = (props) => {
	const [toDos, setToDos] = useState([]);
	const [newTask, setNewTask] = useState("");
	return (
		<React.Fragment>
			<input
				className="form-control shadow px-4 py-2 bg-white"
				placeholder="What needs to be done?"
				value={newTask}
				onChange={(evento) => {
					setNewTask(evento.target.value);
				}}
				onKeyPress={(evento) => {
					if (evento.key === "Enter") {
						let newToDo = [...toDos, newTask];
						setToDos(newToDo);
						setNewTask("");
						n;
					}
				}}></input>
			<div className="task-list">
				{toDos.map((task, index) => {
					return (
						<div className="form-control toDoElement shadow px-4 py-2 d-flex flex-row flex-nowrap justify-content-between bg-white">
							<ToDoItem key={index} task={task} />
							<span
								className="delete"
								onClick={(evento) => {
									setToDos(
										toDos.filter((t, i) => {
											if (index == i) {
												return false;
											} else {
												return true;
											}
										})
									);
								}}>
								X
							</span>
						</div>
					);
				})}
				<div className="form-control items-counter px-4 py-1 bg-light">
					{toDos.length} items left
				</div>
			</div>
		</React.Fragment>
	);
};
