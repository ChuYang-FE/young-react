import React, { useState, useCallback } from "react";
/**
 * useCallback第二个参数决定第一个参数是否执行
 * 如果第二个参数发生变化，则执行，否则不执行
 * 第一个参数会先执行第一次，再判断第二个参数是否变化
 */
const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>count</button>
      <p>{count1}</p>
      <button onClick={useCallback(() => setCount1(count1 + 1), [count1])}>
        count1
      </button>
    </div>
  );
};

export default UseCallBack;
