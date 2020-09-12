import React from 'react';
// import qs from 'querystring';

class Fetch extends React.Component {
  state = { 
    repoArr: [],
  }

  componentDidMount() {
    // github
    fetch('https://api.github.com/users/CoderTyy/repos')
		.then(res => res.json())
    .then(data => {
      this.setState({
        repoArr: data,
      })
    });

    //音乐
    //跨域情况，生产模式：解决方案1. package.json文件设置代理
    fetch('/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0')
		.then(res => res.json())
    .then(data => {
      console.log(data);
    });
  }

  render() {
    return ( 
      <div> 我的GitHub仓库：
        {
          this.state.repoArr.map((item, index) => {
            return (
              <div key={index}>
                <span>{index}.<a href={ item.html_url }>{ item.name }</a></span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Fetch;