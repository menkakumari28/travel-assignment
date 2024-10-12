import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Slider = ({ carouselData }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      indicators={false}
      pause={false}
      interval={10000}
      fade
    >
      {carouselData.map((item, i) => (
        <Carousel.Item key={i}>
          <img className="d-block w-100" src={item} alt="" />
          <Carousel.Caption>
            <h3>make the right</h3>
            <h1>move.</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
