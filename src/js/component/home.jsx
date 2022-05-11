import React from "react";
import "../../styles/index.css";
import { ToDoForm } from "./todoform";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<div className="container-fluid d-flex flex-column align-items-center">
				<h1 className="text-center mt-5">todos</h1>
				<div className="to-do-list">
					<ToDoForm />
					<div id="bottom-1" className="shadow bg-light"></div>
					<div id="bottom-2" className="shadow bg-light"></div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
