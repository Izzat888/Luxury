import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import bg1 from "./images/photo1.webp";
import bg2 from "./images/photo2.webp";
import bg3 from "./images/photo3.webp";

import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();

  const slides = [
    {
      image: bg1,
      title: t("hero.title1"),
      text: t("hero.text1"),
      btn: t("hero.btn1")
    },
    {
      image: bg2,
      title: t("hero.title2"),
      text: t("hero.text2"),
      btn: t("hero.btn2")
    },
    {
      image: bg3,
      title: t("hero.title3"),
      text: t("hero.text3"),
      btn: t("hero.btn3")
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      ></div>

      <div className="container">
        <div className="hero__container">
          <h1 className="hero__title">{slides[index].title}</h1>
          <p className="hero__text">{slides[index].text}</p>
          <button className="hero__btn">{slides[index].btn}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
