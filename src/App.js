import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { text: input, complete: false, id: Math.random() * 100 },
    ]);
    setInput("");
  };

  const handleDone = (e) => {
    let index = e.target.value;
    todo[index] = { ...todo[index], complete: true };
    setTodo([...todo]);
  };

  const handleDelete = (e) => {
    let index = e.target.value;
    setTodo(todo.filter((el, idx) => idx !== index));
  };

  return (
    <div className="container">
      <h1 align="center">My Task List</h1>
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <div className="form-group">
          <input
            type="text"
            name="input"
            onChange={handleChange}
            value={input}
          />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
      <div>
        <ul>
          {todo.map((e, index) => {
            return (
              <li key={index}>
                <p className={e.complete ? "complete" : ""}>{e.text}</p>
                <button
                  onClick={handleDone}
                  value={index}
                  className="btn btn-sm btn-success mr-2 ml-2"
                >
                  Done
                </button>
                <button
                  onClick={handleDelete}
                  value={index}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
