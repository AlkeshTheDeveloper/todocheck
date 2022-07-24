import React from "react";
import { useEffect, useState } from "react";
import Donelist from "./components/Donelist";
import Todo from "./components/Todo";

function App() {
  const [todolist, settodolist] = useState([]);

  const ondelete = (item) => {
    const selectedlist = todolist.filter((i) => i.id !== item.id)
    settodolist([...selectedlist]);
  };

  const updateTodo = (res) => {

    settodolist([...todolist]);

  };

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos"
      );
      const res = await data.json();
      console.log(res);
      settodolist(res);
    }

    getData();
  
    
    return () => {
     
    }
  }
    , []);



  return (
    <>
      <Todo todolist={todolist} ondelete={ondelete} updateTodo={updateTodo} />
      <Donelist
        todolist={todolist}
        ondelete={ondelete}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default App;
