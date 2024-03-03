
import React from 'react';
import './tag.scss';

const Tag = ({ data }) => {
  return (
    <div className='tags'>
      {data.map((tag, index) => (
        <div key={index} className='tag'>{tag}</div>
      ))}
    </div>
  );
};

export default Tag;
