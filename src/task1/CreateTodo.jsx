import React from "react";
import style from "./CreateTodo.module.css";
const CreateTodo = (props) => {
  let { todo, handletodo, handlesubmit } = props; // yeh destructuring mein dhyan rkhna ki jo key props pass krte hue call kra tha wahi rhna chahiye wrna error aayega .
  return (
    <div className={style.CreateTodoWrapper}>
      <h1>Todo App</h1>

      <form onSubmit={handlesubmit} className={style.formWrapper}>
        <input type="text" value={todo} onChange={handletodo} className={style.input} />
        <button className={style.button}>Add Todo </button>
      </form>
    </div>
  );
};

export default CreateTodo;
