import React from "react";
import style from "./DisplayTodo.module.css";
const DisplayTodo = (props) => {
  let { alltodos } = props;
  return (
    <div className={style.todoList}>
      {alltodos.length === 0 ? (
        <h1> No todo Availabe</h1>
      ) : (
        alltodos.map((todo) => {
          return (
            <div key={todo.id} className={style.todoItem}>
              <h3>{todo.text}</h3>
              <div className={style.todoActions}>
                <button>update</button>
                <button>delete</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayTodo;
