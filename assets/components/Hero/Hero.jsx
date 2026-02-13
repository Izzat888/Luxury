import React from 'react'

import { useTranslation } from 'react-i18next'
import "./Hero.css"
const Hero = () => {
    const { t } = useTranslation();
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero__container"></div>
        </div>
    </div>
  )
}

export default Hero