import React, { useState, useEffect } from 'react';
import "./App.css";
import { ThreeDots } from 'react-loader-spinner';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSprayCan } from "@fortawesome/free-solid-svg-icons";
import Header from '../assets/components/Header/Header';
import Hero from '../assets/components/Hero/Hero';
import Nav from '../assets/components/Nav/Nav';
import Article from '../assets/components/Article/Article';
import Section from '../assets/components/Section/Section';
import Brend from '../assets/components/Brend/Brend';
import Aside from '../assets/components/Aside/Aside';
import Contact from '../assets/components/Contact/Contact';
import Location from '../assets/components/Location/Location';
import Footer from '../assets/components/Footer/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, rgba(151,121,56,1), rgba(230,184,0,1), rgba(255,77,77,1), rgba(50,205,50,1))",
        gap: "20px"
      }}>
        <div className='logo'>
          <FontAwesomeIcon className='icon' icon={faSprayCan} size='3x' />
          <div className='logo__box'>
            <h1 className='icon__title'>LUXURY LINE</h1>
            <p className='icon__text'>PERFUMES</p>
          </div>
        </div>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#8d3897"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    );
  }


  return (
    <>
      <Header />
      <Hero />
      <Nav />
      <Article />
      <Section />
      <Brend />
      <Aside />
      <Contact />
      <Location />
      <Footer />
    </>
  );
}

export default App;
