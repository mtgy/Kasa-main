//import React from 'react';
import Header from "@layout/header/Header";
import Footer from "@layout/footer/Footer";
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
      <>
      <Header />
      <main>
        <div className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/'>Retourner sur la page d’accueil</Link>
            </div>
            </main>
          <Footer />
          
        </>
    );
};

export default NotFound;