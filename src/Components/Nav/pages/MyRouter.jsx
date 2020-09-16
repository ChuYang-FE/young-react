import React from 'react';
import TestBtn from './TestBtn';

const MyRouter = props => {
  const handleClick = () => {
    console.log(props);
    props.history.push("/");
  }
  return (
      <div>
        <h2>This is my <span style={{color:'red'}}>Router页面内容</span></h2>
        <button onClick={ handleClick }>跳转到home页</button>
        <TestBtn />
      </div>
  )
}

export default MyRouter;