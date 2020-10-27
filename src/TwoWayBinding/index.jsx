import React from 'react';

export default class TwoWayBinding extends React.Component{
  state = {
    myData: "",
  }

  getData = (e) => {
    this.setState({
      myData: e.target.value,
    })
  }

  render() {
    return(
      <div>
        <h1>模仿v-model：</h1>
        <input type="text" onChange={this.getData}/>
        <h2>输入的值：{ this.state.myData || "无" }</h2>
      </div>
    )
  }
}