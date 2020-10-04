import React, { useState } from "react";

const userSet = ["A", "B", "C", "D"];

const RandomUser = () => {
  const [user, setUser] = useState(userSet[0]);

  const generateUser = () => {
    let randomIndex = Math.floor(Math.random() * userSet.length);
    let randomUser = userSet[randomIndex];
    setUser(randomUser);
  };

  return (
    <div>
      <p>当前user：{user}</p>
      <button onClick={generateUser}>随机切换user</button>
    </div>
  );
};

export default RandomUser;
