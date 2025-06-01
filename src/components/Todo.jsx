import { useState, useEffect, useRef } from "react";
import Data from "./Data.jsx";
import "./todo.css";
import add from "../assets/add.png";
const Todo = () => {
  const [data, changeData] = useState([]);

  const inputRef = useRef();

  const addOn = (task) => {
    if (!task.trim()) return; //prevent empty tasks

    const newTask = {
      id: Date.now(), //create id
      text: task,
    };
    changeData((prev) => {
      return [...prev, newTask];
    });
    inputRef.current.value = ""; // clear input
    console.log([data]);
  };

  const deleteOne = (task) => {
    console.log(task);
    changeData((prev) => prev.filter((element) => element.id != task.id));
  };

  return (
    <div className="header">
      <h1>TO-DO List</h1>
      <div className="dataAddOn">
        <input ref={inputRef} type="text" placeholder="Add New Task" />
        <img src={add} alt="+" onClick={() => addOn(inputRef.current.value)} />
      </div>
      {data.length > 0 && (
        <div className="list">
          {data.map((task) => (
            <Data key={task.id} task={task} onDelete={deleteOne} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Todo;
