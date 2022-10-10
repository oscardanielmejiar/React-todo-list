import React, { useEffect, useState } from "react";
import "./todolist.css";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="task-box">
      <ul className="list-group">
        <li className=" input-group mb-3">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="form-control"
            placeholder="No tasks, add a task"
            aria-label="No tasks, add a task"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="inputGroupFile01"
            onClick={() => {
              setTodos([...todos,inputValue]);
              setInputValue("");
            }}
          >            Add Task
          </button>
        </li>
        {todos.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList
