import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import "./ToDoList.css";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (task.trim() === "") return;
    setLoading(true);

    setTimeout(() => {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
      setLoading(false);
    }, 2000);
  }

  function toggleComplete(index) {
    setTasks(
      tasks.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="container">
      <form className="form" id="form" onSubmit={handleSubmit}>
        <div className="grid grid-2-columns">
          <input
            type="text"
            value={task}
            placeholder="Task name.."
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn">Add task</button>
        </div>
      </form>

      <div className="spinner">
        {loading && (
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#9670f3"
            ariaLabel="three-dots-loading"
          />
        )}
      </div>
      <div className="task-list">
        <ul>
          {tasks.map((item, index) => {
            let style = { cursor: "pointer" };

            if (item.completed) {
              style.textDecoration = "line-through";
            } else {
              style.textDecoration = "none";
            }

            return (
              <li
                key={index}
                onClick={() => toggleComplete(index)}
                style={style}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
