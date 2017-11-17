import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './slide.css';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          id: 1,
          title: 'Slide 1',
          content: 'This works wonderfully when you know the size of the thing you are centering. If you dont know, or are thinking it might change and want to be future proof, try this',
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
    };
  }
  render() {
    const { match } = this.props;
    const slide = this.state.slides.find(slide => slide.id === +match.params.id);

    if (!slide) {
      const id = [ ...this.state.slides ].shift().id;
      return (
        <Redirect to={`/slides/${id}`} />
      );
    }

    return (
      <div className="slide">
        <h1 className="slide-title">{slide.title}</h1>
        <div className="slide-content">{slide.content}</div>
      </div>
    );
  }
}
