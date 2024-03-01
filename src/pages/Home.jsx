import React, {useState} from "react";
import DataLogements from '@/data/logements.json'
import Header from "@layout/header/Header";
import Footer from "@layout/footer/Footer";
import Banner from "@partials/banner/Banner";
import BannerImg from "@/assets/banner_home.jpg";
import Cards from "@partials/card/Cards";




const Home  = () => {
     return (
        <>
           <Header />
           <main>
           <Banner
              textBanner="Chez vous, partout et ailleurs"
              imageUrl={BannerImg}
          />  
          <Cards data={DataLogements}/>
          </main>
          <Footer />
          
        </>
      )
}

export default Home;
