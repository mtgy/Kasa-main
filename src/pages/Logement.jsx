// Logement.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "@layout/header/Header";
import Footer from "@layout/footer/Footer";
import DataLogements from '@/data/logements.json';
import Carousel from '../components/partials/carousel/Carousel';

const Logement = () => {
    const { id } = useParams(); 
  
    
    console.log('Id récupéré :', id); 


    
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
        <div>
            <Carousel data={logement.pictures} />
          <h1>{logement.title}</h1>
          <p>{logement.description}</p>
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
