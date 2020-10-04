import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  function setValue(text) {
    setTodos([{ text }, ...todos]);
  }

  return (
    <div>
      <ToDoForm onSubmit={setValue} />
      {todos.map((item, index) => {
        return <div key={index}>{item.text}</div>;
      })}
      <button
        onClick={() => {
          setTodos([{}]);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default ToDoList;
