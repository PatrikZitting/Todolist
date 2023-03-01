import React, { useState } from "react";
import "../App.css";

function Todolist() {
  const [todo, setTodo] = useState({ desc: "", date: "" });
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ desc: "", date: "" });
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="desc"
          value={todo.desc}
          onChange={inputChanged}
        />
        <input
          type="date"
          name="date"
          value={todo.date}
          onChange={inputChanged}
        />
        <input type="submit" value="Add" />
      </form>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;