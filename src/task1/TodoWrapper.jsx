import style from "./TodoWrapper.module.css";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";
import { useState } from "react";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");

  const [allTodos, setAllTodos] = useState([]);

  const handleTodo = (e) => {
    setTodo(e.target.value); // yeh jo bhi value likhenge woh state mein store ho jayega
  };

  const Handlesubmit = (e) => {
    e.preventDefault();
    // console.log(todo);

    //yahan jo bhi input de rhe hai usko ek object mein store kr rhe hai.
    let newTodo = {
      id: Date.now(), // isse unique id generate hote rhega .
      text: todo,
    };
    console.log(newTodo);

    setAllTodos([...allTodos, newTodo]); // yeh store kr rha hai saare todo ko ek array ke andar

    setTodo(""); //Clearing input field.
  };
  return (
    <div id={style.TodoWrapper}>
      <CreateTodo
        todo={todo}
        handletodo={handleTodo}
        handlesubmit={Handlesubmit}
      />

      <DisplayTodo alltodos={allTodos} />
    </div>
  );
};

export default TodoWrapper;
