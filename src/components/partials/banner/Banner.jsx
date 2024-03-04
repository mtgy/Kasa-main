import React, { useEffect, useRef } from 'react';
import './Banner.scss';

const Banner = ({ textBanner, imageUrl }) => {
  const h1Ref = useRef();

  useEffect(() => {
    if (h1Ref.current && textBanner) {

      h1Ref.current.textContent = textBanner.split(', ').join(',\n');
    }
  }, [textBanner]);

  const hasText = textBanner && textBanner.trim() !== '';

  return (
    <div className={`banner ${hasText ? 'has-text' : ''}`}>
      {hasText && <h1 ref={h1Ref}>{textBanner}</h1>}
      <img src={imageUrl} alt="Bannière" className={hasText ? 'with-text' : ''} />
    </div>
  );
};

export default Banner;
