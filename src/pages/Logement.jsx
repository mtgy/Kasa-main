// Logement.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "@layout/header/Header";
import Footer from "@layout/footer/Footer";
import DataLogements from '@data/logements.json';
import Carousel from '@partials/carousel/Carousel';
import Tag from '@partials/tag/Tag';
import Rating from '@partials/rating/Rating'
import './logement.scss';

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = DataLogements.find(logement => logement.id === id);
    console.log(foundLogement);
    if (foundLogement) {
      setLogement(foundLogement);
    }
  }, [id]);

  return (
    <>
      <Header />
      <main>
        <div>
          {logement ? (
            <div className='container'>
              <Carousel data={logement.pictures} />
              <div className='title'>
                <h2>{logement.title}</h2>
                <h3>{logement.location}</h3>
              </div>
              <Tag data={logement.tags} />
              <Rating data={logement.rating} />
              {/* Affichez d'autres détails du logement ici */}
            </div>
          ) : (
            <div>{id}</div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Logement;
