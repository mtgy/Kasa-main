import React from 'react';
import Header from '../components/layout/header/Header';
import Banner from "@partials/banner/Banner";
import BannerImg from "@/assets/banner_about.jpg";
import DataAbout from '@/data/about.json';
import Collapse from '../components/partials/collapse/Collapse';
import Footer from '../components/layout/footer/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Banner imageUrl={BannerImg} />
        <div className='section'>
        {DataAbout.map((item, index) => (
          <Collapse
            key={index}
            CollapseTitle={item.title}
            CollapseContent={item.content}
          />
        ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
