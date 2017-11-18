import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SlideShow from './containers/SlideShow';
// import logo from './logo.svg';
import './App.css';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="Slides-App">
            <Route exact path="/" component={SlideShow} />
            <TransitionGroup>
              <Fade key={location.key}>
                <Route location={location} key={location.key} path="/slides/:id" component={SlideShow} />
              </Fade>
            </TransitionGroup>
          </div>
        )}
      />
    );
  }
}

export default App;
