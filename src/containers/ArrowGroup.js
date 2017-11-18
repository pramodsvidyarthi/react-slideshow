import React, { Component } from 'react';
import Arrow from '../components/Arrow';

export default class ArrowGroup extends Component {
  getAvailableArrowClassNames() {
    const { currentSlide, totalSlides } = this.props;
    return {
      "arrow-right": currentSlide.id < totalSlides ? `/slides/${currentSlide.id + 1}` : null,
      "arrow-left": currentSlide.id > 1 ? `/slides/${currentSlide.id - 1}` : null,
    }
  }

  render() {
    const availableArrowClasses = this.getAvailableArrowClassNames();
    return (
      <div className="arrow-container">
      {
        Object.keys(availableArrowClasses).map(arrow => {
          if (availableArrowClasses[arrow]) {
            return <Arrow
            key={availableArrowClasses[arrow]}
            className={arrow}
            path={availableArrowClasses[arrow]}
            />
          }
          return null;
        })
      }
      </div>
    );
  }
}
