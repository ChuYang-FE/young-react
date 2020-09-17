import React from 'react';
import api from '../api/index';
// import qs from 'querystring';

class Fetch extends React.Component {
  state = { 
    repoArr: [],
  }

  componentDidMount() {
    //封装前
    // fetch('https://api.github.com/users/CoderTyy/repos')
		// .then(res => res.json())
    // .then(data => {
    //   this.setState({
    //     repoArr: data,
    //   })
    // });

    //封装后
    api.getGithubRepo()
    .then(res => res.json())
    .then(data => {
      this.setState({
        repoArr: data,
      })
    });;

    //音乐
    //跨域情况，生产模式：解决方案1. package.json文件设置代理
    // fetch('/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0')
		// .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    // });

    //封装后
    api.getMusicRank({
      method: 'baidu.ting.billboard.billList',
      type: 1,
      size: 10,
      offset: 0,
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });

    // 请求数据
    this.getAllData2();
  }

  // async await
  // 模拟请求
  getPromise = (str = 'success') => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(str), 2000);
    });
  }

  getAllData1 = async () => {
    console.log('start');
    const data1 = await this.getPromise('data1');
    // 2秒后才打印hello!和data1
    console.log('hello!');
    console.log(data1);
    const data2 = await this.getPromise('data2');
    //又2秒后打印data2
    console.log(data2); 
  }

  getAllData2 = async () => {
    console.log('start');
    const [data1, data2] = await Promise.all([this.getPromise('data1'), this.getPromise('data2')])
    // const getPro1 = this.getPromise('data1');
    // const getPro2 = this.getPromise('data2');
    // const data1 = await getPro1;
    console.log(data1);
    console.log('hello!');
    // const data2 = await getPro2;
    console.log(data2);
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