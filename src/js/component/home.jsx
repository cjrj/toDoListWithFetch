import React from "react";
import "../../styles/index.css";
import { ToDoForm } from "./todoform";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<div className="container-fluid d-flex flex-column align-items-center">
				<h1 className="text-center mt-5">todos</h1>
				<div className="">
					<ToDoForm />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
