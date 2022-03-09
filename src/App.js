import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Todo from "./components/Todo.js";
import Done from "./components/Done";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  
  const updateTodo = (res) => {
    setTodoItems([...todoItems,res]);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/1/todos`)
      .then((response) => {
        const res = response.data;
        setTodoItems(res);
      });
  }, []);

  return (
    <div className="App">
      <Todo todoItems={todoItems} updateTodo={updateTodo} />
      <Done todoItems={todoItems} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
