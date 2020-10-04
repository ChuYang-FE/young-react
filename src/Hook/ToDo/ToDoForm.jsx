import React, { useState } from "react";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState("");
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};

const ToDoForm = ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("");

  function onSubmitHandler(e) {
    e.preventDefault();
    onSubmit(text.value);
    resetValue();
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" {...text} />
      </form>
    </div>
  );
};

export default ToDoForm;
