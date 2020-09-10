import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';


class TestBtn extends React.Component {
  state = {  }
  render() { 
    return ( 
      <Button type="primary" style={{margin:'30px'}}>Antd按钮</Button>
    );
  }
}

export default TestBtn