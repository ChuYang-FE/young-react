import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import MyRouter from './pages/MyRouter'
import Nav from './Nav'
import NotFound from './pages/NotFound';
import UCenter from './pages/UCenter';
import '../../../src/index.css'

class NavAndShow extends React.Component {
  render() {
    return (
      <div>
        <hr/>
        <h1>路由切换：</h1>
        <Router>
          <Nav>
            <Switch>
              <Route exact path="/home" component={ Home }></Route>
              <Redirect exact from="/" to="/home" component={ Home }></Redirect>
              <Route exact strict path="/router" component={ MyRouter }></Route>
              <Route path="/router/ucenter/:id" component={ UCenter }></Route>
              <Route component={ NotFound }></Route>
            </Switch>
          </Nav>
        </Router>
      </div>
    );
  }
}

export default NavAndShow;