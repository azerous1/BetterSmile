import React, {Component} from 'react';
import './css/App.css';
import {Route, Switch, Redirect } from 'react-router-dom';
import Home from "./components/home/home"
import About from "./components/about/about"

class App extends Component {
  state = {
    users: {}
  };
  
  render() {
    return (
      <Switch>
        <Route exact path ='/' render={() => {
          return (
            <Home/>
          );
        }}/>
        <Route path='/about' component={About}/>
        <Redirect to='/'/>
      </Switch>
    )
  }
}

export default App;
