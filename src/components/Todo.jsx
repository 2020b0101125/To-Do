import { useState, useEffect, useRef } from "react";
import "./todo.css";
import add from "../assets/add.png";
import bin from "../assets/bin.png";
const Todo = () => {
  const [data, changeData] = useState([]);
  const inputRef = useRef();
  const addOn = (data) => {
    changeData();
  };
  return (
    <div className="header">
      <h1>TO-DO List</h1>
      <div className="dataAddOn">
        <input type="text" placeholder="Add New Task" />
        <img src={add} alt="+" />
      </div>
      <div className="list">
        <div className="data">
          <p>Smething</p>
          <img src={bin} alt="-" />
        </div>
        <div className="data">
          <p>Smething</p>
          <img src={bin} alt="-" />
        </div>
        <div className="data">
          <p>Smething</p>
          <img src={bin} alt="-" />
        </div>
      </div>
    </div>
  );
};
export default Todo;
