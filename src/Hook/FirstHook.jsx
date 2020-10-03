import React, { useState, useEffect } from "react";

const FirstHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <p>点击了 {count} 次</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default FirstHook;
