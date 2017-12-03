import React from 'react';

const Image = ({ url }) => <img src={url} alt="no preview"/>

const Content = ({ content }) => <p>{content}</p>

const renderSlideContent = (slide) => {
  const { type } = slide;
  switch (type) {
    case 'content':
      return <Content content={slide.content} />;
    case 'image':
      return <Image url={slide.imageURL} />;
    default:
      return null;
  }
}

export default ({ slide }) => (
  <div className="slide">
    <h1 className="slide-title">{slide.title}</h1>
    <div className="slide-content">{renderSlideContent(slide)}</div>
  </div>
);
