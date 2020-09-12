import React from 'react';

class Fetch extends React.Component {
  state = { 
    repoArr: [],
  }

  componentDidMount() {
    fetch('https://api.github.com/users/CoderTyy/repos')
		.then(res => res.json())
    .then(data => {
      this.setState({
        repoArr: data,
      })
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