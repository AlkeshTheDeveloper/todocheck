import React, { useState } from "react";
import '../App.css'

function Todo({ todolist, ondelete ,updateTodo}) {



   const completeTodo = (selected) => {
     const intodo = todolist.filter((item) => item.id === selected.id).map((i)=>i.completed=true);
     updateTodo([...intodo]);
   };

  const deleteTodo = (item) => { 

    ondelete(item);
        console.log(todolist);
  }




  return <div>
    <ol>
      {todolist.filter((i) =>i.completed === false).map((item) => <li key={item.id}>{ item.title} <span className="btn-todo"><button onClick={()=>completeTodo(item)}>done</button><button onClick={()=>deleteTodo(item)}>delete</button></span></li>) }
  </ol>
  </div>;
}

export default Todo;
