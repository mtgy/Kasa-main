import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './carousel.scss'; 

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      {data.length > 1 && (
        <>
          <button onClick={handlePrev} className="arrow prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={handleNext} className="arrow next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
      <div className="slides">
        {data.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={item} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {data.length > 1 && (
        <div className="pagination">
          <span className="current-slide">{currentSlide + 1}</span>
          <span className="separator">/</span>
          <span className="total-slides">{data.length}</span>
        </div>
      )}
    </div>
  );
};

export default Carousel;
