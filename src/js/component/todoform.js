import React from "react";
import "../../styles/index.css";
import { ToDoItem } from "./todoitem";
import { useState } from "react";
import { useEffect } from "react";

export const ToDoForm = (props) => {
	const [toDos, setToDos] = useState([]);
	const [newTask, setNewTask] = useState([{ label: "", done: false }]);

	//Funcion para obtener la lista que tenemos en la API
	const getTodoList = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/carlos"
		);
		const body = await response.json();
		if (!response.ok) {
			createUserList();

			return;
		}
		setToDos(body);
	};

	// Estado para obtener la lista luego del primer renderizado
	useEffect(() => {
		getTodoList();
	}, []);

	//Funcion para crear el user
	const createUserList = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/carlos",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify([]),
			}
		);
		if (!response.ok) {
			alert(
				`fallo el GET, y luego el POST: ${response.status}: ${body.msg}`
			);
		}
		getTodoList();
	};
	//Funcion para cargar tareas en el payload
	const putList = async (toDos) => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/carlos",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(toDos),
			}
		);
		return response;
	};
	const deleteList = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/carlos",
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify([]),
			}
		);
		return response;
	};

	return (
		<React.Fragment>
			<div className="task-form d-flex flex-row flex-nowrap justify-content-between align-items-center">
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
						}
					}}></input>
				<div className="buttons-form d-flex flex-row flex-nowrap justify-content-end">
					<button
						type="button"
						className="btn btn-success"
						onClick={(evento) => {
							putList();
						}}>
						Submit
					</button>
					<button
						type="button"
						className="btn btn-danger"
						onClick={(evento) => {
							deleteList();
						}}>
						Delete
					</button>
				</div>
			</div>

			<div className="task-list">
				{toDos.map((task, index) => {
					return (
						<div className="form-control toDoElement shadow px-4 py-2 d-flex flex-row flex-nowrap justify-content-between bg-white">
							<ToDoItem key={index} task={task} />
							<div className="taskOptions d-flex flex-row flex-nowrap align-items-center justify-content-end px-1">
								<div className="form-check form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										role="switch"
										id="flexSwitchCheckChecked"
										value=""
										onChange={(evento) => {
											const isChecked =
												document.getElementById(
													"flexSwitchCheckChecked"
												);
											let isDone = isChecked.checked;
											/* 											setNewTask(isDone.target.value);
											let putDone = [
												...toDos.done,
												newTask.done,
											];
											setToDos(putDone); */
										}}></input>
									<label
										className="form-check-label"
										htmlFor="flexSwitchCheckChecked">
										Done
									</label>
								</div>
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
						</div>
					);
				})}
				;
				<div className="form-control items-counter px-4 py-1 bg-light">
					{toDos.length === 0
						? "Add your first task"
						: `${toDos.length} items left`}
					{console.log(toDos)}
				</div>
			</div>
		</React.Fragment>
	);
};
