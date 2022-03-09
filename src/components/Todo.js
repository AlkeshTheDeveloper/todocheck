import React, { useState, useEffect } from "react";
import Done from "./Done";
import { v4 as uuidv4 } from "uuid";

function Todo({ todoItems, updateTodo }) {
  const [showButton, setshowButton] = useState(true);
  const [newlist, setNewlist] = useState({ title: "", completed: false, id: uuidv4()
});

  const AddtoDone = (id) => {
    let result = todoItems
      .filter((items) => items.id === id)
      .map((it) => (it.completed = true));
    updateTodo({ ...todoItems, result });
  };

  const AddtoList = () => {
     
    updateTodo({ ...todoItems,...newlist });
    console.log(newlist);
    setNewlist({newlist,title:""});

}

  const deleteHandler = (id) => {
  let res=todoItems.filter((list)=>list.id===id)
    updateTodo({ ...res })
}

  useEffect(() => {
    return () => {
      AddtoDone();
    };
  },[]);

  return (
    <div className="todo">
      <p>Todo</p>
      <div className="todolist">
        <ol>
          {todoItems
            .filter((item) => item.completed === false)
            .map((res, index) => (
              <li key={res.id} id={res.id}>
                {res.title}{" "}
                <span>
                  <button
                    onClick={() => {
                      AddtoDone(res.id);
                    }}
                  >
                    Done
                  </button>
                  <button onClick={()=>deleteHandler(res.id)}>Delete</button>
                </span>
              </li>
            ))}
        </ol>
        <div>
          {showButton ? (
            <button onClick={() => setshowButton(false)}>+ item</button>
          ) : (
            <div>
              <input
                type="text"
                placeholder="new todo"
                value={newlist.title}
                onChange={(e) =>
                  setNewlist({ ...newlist, title: e.target.value })
                }
              />
              <button onClick={AddtoList}>Add item</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
