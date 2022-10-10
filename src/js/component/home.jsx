import React from "react";

//include images into your bundle
import TodoList from "./todoList.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">My Todo list</h1>
		<div>
		<TodoList />
		</div>


		</div>
	);
};

export default Home;
