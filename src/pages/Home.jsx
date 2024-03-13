import React from "react";
import DataLogements from '@/data/logements.json';
import Header from "@layout/header/Header";
import Footer from "@layout/footer/Footer";
import Banner from "@partials/banner/Banner";
import BannerImg from "@/assets/banner_home.jpg";
import Card from "@partials/card/Card";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner
          textBanner="Chez vous, partout et ailleurs"
          imageUrl={BannerImg}
        />
        <div className="cardList">
          {DataLogements.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
