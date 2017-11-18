import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SlideShow from './containers/SlideShow';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Slides-App">
        <Switch>
          <Route exact path="/" component={SlideShow} />
          <Route exact path="/slides/:id" component={SlideShow} />
        </Switch>
      </div>
    );
  }
}

export default App;
