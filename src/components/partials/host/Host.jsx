import React from 'react';
import './host.scss';

function Host({ data }) {
    console.log(data);
  const { name, picture } = data;

  return (
    <div className="host-container">
        <p className="host-name">{name}</p>
      <img src={picture} alt={name} className="host-image" />
      
    </div>
  );
}

export default Host;