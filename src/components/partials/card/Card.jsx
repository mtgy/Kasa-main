import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, title, cover }) => {
  const link = `/logement/${id}`;

  return (
    <Link to={link} className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
};



export default Card;
