import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from "@layout/header/Header";
import Footer from "@layout/footer/Footer";
import DataLogements from '@data/logements.json';
import Carousel from '@partials/carousel/Carousel';
import Tag from '@partials/tag/Tag';
import Rating from '@partials/rating/Rating';
import Host from '@partials/host/Host';
import Collapse from '@partials/collapse/Collapse';
import './logement.scss';

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const foundLogement = DataLogements.find(logement => logement.id === id);

    if (foundLogement) {
      setLogement(foundLogement);
    } else {
      setLogement(null);
      setShouldRedirect(true);
    }
  }, [id]);


  if (shouldRedirect) {
    return <Navigate to="*" />;
  }


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


              <div className='tags'>
                {logement.tags.map((tag, index) => (
                  <Tag key={index} data={tag} />
                ))}
              </div>


              <Rating data={logement.rating} />
              <Host data={logement.host}/>
              <Collapse
                CollapseTitle='Description'
                CollapseContent={logement.description}
              />
              <Collapse
                CollapseTitle='Equipments'
                CollapseContent={logement.equipments}
              />
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