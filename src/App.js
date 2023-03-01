import React, { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
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
        <Todolist todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;