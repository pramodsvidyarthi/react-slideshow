import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import Slide from '../components/Slide';
import ArrowGroup from './ArrowGroup';
import Animate from '../components/Animate';
import data from '../data';

export default class SlideShow extends Component {
  state = {
    slides: data,
  };

  handleKeyDown = (e) => {
    e.preventDefault();
    const key = e.keyCode;
    let { id } = this.props.match.params;
    if ((+id === 1 && key === 37) || (+id === this.state.slides.length && key === 39)) return;
    switch(key) {
      case 39:
        id = +id + 1;
        break;
      case 37:
      id = +id - 1;
      break;
      default: return;
    }
    this.props.history.push(`/slides/${id}`);
  }

  render() {
    const { match } = this.props;
    const slide = this.state.slides.find(slide => slide.id === +match.params.id);

    if (!slide) {
      const id = [...this.state.slides].shift().id;
      return <Redirect to={`/slides/${id}`} />;
    }

    return (
      <TransitionGroup
        id="slides-wrapper"
        tabIndex="0"
        onKeyUp={this.handleKeyDown}
      >
        <Animate key={slide.id}>
          <Slide title={slide.title} content={slide.content} />
        </Animate>
        <ArrowGroup currentSlide={slide} totalSlides={this.state.slides.length} />
      </TransitionGroup>
    );
  }
}
