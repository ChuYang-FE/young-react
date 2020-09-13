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
        {/* 以下<TestBtn />组件没有直接被管理，打印props是空对象，解决方案，以下组件使用withRouter */}
        <TestBtn />
      </div>
  )
}

export default MyRouter;