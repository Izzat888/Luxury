import React from 'react'

import "./App.css"
import Header from '../assets/components/Header/Header'
import Hero from '../assets/components/Hero/Hero'
import Nav from '../assets/components/Nav/Nav'
import Article from '../assets/components/Article/Article'
import Section from '../assets/components/Section/Section'
import Brend from '../assets/components/Brend/Brend'
import Aside from '../assets/components/Aside/Aside'
import Contact from '../assets/components/Contact/Contact'
import Location from '../assets/components/Location/Location'
import Footer from '../assets/components/Footer/Footer'
const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Nav/>
      <Article/>
      <Section/>
      <Brend/>
      <Aside/>
      <Contact/>
      <Location/>
      <Footer/>
    </>
  )
}

export default App