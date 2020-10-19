import React from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="routeSelected" to='/home'>Home页面</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="routeSelected" to={{
              pathname: '/router',
              search: '?sort=name',
              hash: '#the-hash',
              state: { fromDashboard: true }
            }}>MyRouter页面</NavLink>
          </li>
          <li>
            <NavLink activeClassName="routeSelected" to='/router/ucenter'>MyRouter页面下的UCenter页面</NavLink>
          </li>
        </ul>
        { this.props.children || `Welcome to Nav!` }
      </div>
    );
  }
}

export default Nav;