import React, { useEffect, useState } from "react";

function Done({ todoItems, updateTodo }) {
  const AddToIncomplete = (id) => {
    let result = todoItems
      .filter((items) => items.id === id)
      .map((it) => (it.completed = false));
    updateTodo({ result, ...todoItems });
  };
  const OnDeleteHandler = (id) => {
    let res = todoItems.filter((i) => i.id !== id);

    updateTodo({ res });
  };

  useEffect(() => {
    return () => {
      OnDeleteHandler();
      AddToIncomplete();
    };
  }, []);
  return (
    <div className="todo">
      <p>Done</p>

      <div className="todolist">
        <ol>
          {todoItems
            .filter((item) => item.completed === true)
            .map((res) => (
              <li key={res.id} id={res.id}>
                {res.title}{" "}
                <span>
                  <button onClick={() => AddToIncomplete(res.id)}>Todo</button>
                  <button onClick={() => OnDeleteHandler(res.id)}>
                    Delete
                  </button>
                </span>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Done;
