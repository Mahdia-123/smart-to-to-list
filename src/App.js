import "./App.css";
import ToDoList from "./ToDoList";

export default function App() {
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <ToDoList />
      <footer>
        {" "}
        <p>
          This page was coded by <a href="">Mahdia Khamoosh</a>and is{" "}
          <a href="">Open-sourced</a>and hosted on <a href="">Netlify</a>
        </p>
      </footer>
    </div>
  );
}
