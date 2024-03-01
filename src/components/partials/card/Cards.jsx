import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.scss'; 

const Card = ({ id, title, cover }) => {
  const link = `/logement/${id}`; // Remplacez "votre-chemin" par le chemin réel que vous souhaitez

  return (
    <Link to={link} className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
};
  
const Cards = ({ data }) => {
  return (
    <div className="cardList">
      {data.map((item) => (
        <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
      ))}
    </div>
  );
};

export default Cards;
