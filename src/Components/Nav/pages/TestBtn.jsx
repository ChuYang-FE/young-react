import React from 'react';
import { withRouter } from 'react-router-dom';

class TestBtn extends React.Component {
  handleClick() {
    console.log(this.props);
    this.props.history.push('/');
  }
  render(){
    return(
      <button onClick={ this.handleClick.bind(this) }>组件Btn跳转到Home页面</button>
    )
  }
} 

export default withRouter(TestBtn);