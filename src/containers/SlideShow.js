import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import debounce from 'lodash.debounce';
import Slide from '../components/Slide';
import ArrowGroup from './ArrowGroup';
import Animate from '../components/Animate';
import data from '../data';

export default class SlideShow extends Component {
  state = {
    slides: data,
    animateDirection: '',
  };

  navigateSlide = debounce(this.navigateSlide.bind(this), 500);

  componentWillReceiveProps(nextProps) {
    const currentId = this.props.match.params.id;
    const nextId = nextProps.match.params.id;
    const animateDirection = nextId > currentId ? 'right' : 'left';
    this.setState({ animateDirection });
  }

  navigateSlide(id, key) {
    if ((id === 1 && key === 37) || (id === this.state.slides.length && key === 39)) return;
    switch (key) {
      case 39:
        id = id + 1;
        break;
      case 37:
        id = id - 1;
        break;
      default:
        return;
    }
    this.props.history.push(`/slides/${id}`);
  }

  handleKeyDown = (e) => {
    e.persist();
    e.preventDefault();
    this.navigateSlide(+this.props.match.params.id, e.keyCode);
  };

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
        onKeyDown={this.handleKeyDown}
        className={this.state.animateDirection}
      >
        <Animate key={slide.id}>
          <Slide slide={slide} />
        </Animate>
        <ArrowGroup currentSlide={slide} totalSlides={this.state.slides.length} />
      </TransitionGroup>
    );
  }
}
