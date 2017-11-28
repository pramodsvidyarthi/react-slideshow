import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default ({ children, ...props }) => (
  <CSSTransition {...props} timeout={1000} classNames="slide-fade">
    {children}
  </CSSTransition>
);