import React from 'react'

import "./App.css"
import Header from '../assets/components/Header/Header'
import Hero from '../assets/components/Hero/Hero'
import Nav from '../assets/components/Nav/Nav'
import Article from '../assets/components/Article/Article'
const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Nav/>
      <Article/>
    </>
  )
}

export default App