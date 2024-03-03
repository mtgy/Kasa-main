// Rating.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './rating.scss';

const Rating = ({ data }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={faStar}
          className={star <= data ? 'selected' : ''}
        />
      ))}
    </div>
  );
};

export default Rating;
