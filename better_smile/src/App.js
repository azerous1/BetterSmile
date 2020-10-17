import React, {Component, Fragment} from 'react';
import './App.css';
import {Route, Switch, Redirect } from 'react-router-dom';
import Home from "./components/home"
import Scan from "./components/scan"

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Switch>
        <Route exact path ='/' render={() => {
          return (
            <Home/>
          );
        }}/>
        <Route path='/scan' component={Scan}/>
        <Route path='/about' component={Home}/>
        <Redirect to='/'/>
      </Switch>
    )
  }
}

export default App;
