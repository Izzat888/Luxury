import React, { useEffect, useState } from 'react'

import nav1 from "./images/photo4.jpg";
import nav2 from "./images/photo5.jpg";
import nav3 from "./images/photo6.jpg";
import "./Nav.css"
import { useTranslation } from 'react-i18next';
const Nav = () => {

    const { t } = useTranslation();
    const sliders = [
        {
            image: nav1
        },
        {
            image: nav2
        },
        {
            image: nav3
        }
    ];

    const [navi, setNavi] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNavi(prev => (prev + 1) % sliders.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='nav'>
            <div className='container'>
                <div className="nav__container">
                    <div className="slider__container">
                        <ul className='nav__list'>
                            <li className='nav__item1'>
                                <h2 className='nav__title'>{t("nav.title")}</h2>
                                <p className='nav__text'>{t("nav.text")}</p>
                                <button className='nav__btn'>{t("nav.btn")}</button>
                            </li>
                            <li className='nav__item'>
                                <img
                                    key={navi}
                                    src={sliders[navi].image}
                                    alt="slider"
                                    className='nav__img'
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav