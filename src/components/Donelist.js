import React from "react";
import '../App.css'

function Donelist({ todolist, ondelete,updateTodo }) {
    const deleteTodo = (item) => {
      ondelete(item);
  };
  
  const incompleteTodo = (selected) => {
    const intodo = todolist.filter((item) => item.id === selected.id).map((i)=>i.completed=false)
    updateTodo([...intodo]);
 }

  return (
    <div className="list-2">
      <h1>DONE</h1>
      <ol>
        {todolist
          .filter((i) => i.completed === true)
          .map((item) => (
            <li key={item.id}>
              {item.title}{" "}
              <button onClick={() => incompleteTodo(item)}>Todo</button>
              <button onClick={() => deleteTodo(item)}>delete</button>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default Donelist;
