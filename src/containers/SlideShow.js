import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Slide from '../components/Slide';
import ArrowGroup from './ArrowGroup';

const Animate = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={1000} classNames="slide-fade">
    {children}
  </CSSTransition>
);

export default class SlideShow extends Component {
  state = {
    slides: [
      {
        id: 1,
        title: 'Slide 1',
        content:
          'This works wonderfully when you know the size of the thing you are centering. If you dont know, or are thinking it might change and want to be future proof, try this',
      },
      {
        id: 2,
        title: 'Slide 2',
        content: 'This is slide 2 content',
      },
      {
        id: 3,
        title: 'Slide 3',
        content: 'This is slide 3 content',
      },
    ],
    animate: true,
  };

  render() {
    const { match } = this.props;
    const slide = this.state.slides.find(slide => slide.id === +match.params.id);

    if (!slide) {
      const id = [...this.state.slides].shift().id;
      return <Redirect to={`/slides/${id}`} />;
    }

    return (
      <div id="slides-wrapper">
        <TransitionGroup>
          <Animate key={slide.id}>
            <Slide title={slide.title} content={slide.content} />
          </Animate>
        </TransitionGroup>
        <ArrowGroup currentSlide={slide} totalSlides={this.state.slides.length} />
      </div>
    );
  }
}
