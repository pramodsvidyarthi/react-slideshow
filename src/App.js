import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Slide from './components/Slide';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Slides-App">
        <Switch>
          <Route exact path="/" component={Slide} />
          <Route exact path="/slides/:id" component={Slide} />
        </Switch>
      </div>
    );
  }
}

export default App;
