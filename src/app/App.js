import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Caculate from './component/Caculate/Calculate';
import Count from './component/Count/Count';
class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/caculate' component={Caculate}/>
          <Route exact path='/count' component={Count}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
