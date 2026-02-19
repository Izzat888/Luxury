import React from 'react'

import "./Header.css"
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSprayCan } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    const { t, i18n } = useTranslation()

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <div className='header'>
            <div className='container'>
                <div className="header__container">
                    <div className='logo'>
                        <FontAwesomeIcon className='icon' icon={faSprayCan} size='3x' />
                        <div className='logo__box'>
                            <h1 className='icon__title'>LUXURY LINE</h1>
                            <p className='icon__text'>PERFUMES</p>
                        </div>
                    </div>
                    <ul className='header__list'>
                        <li className='header__item'><a className='header__link' href="#home">{t("header.link1")}</a></li>
                        <li className='header__item'><a className='header__link' href="#about">{t("header.link2")}</a></li>
                        <li className='header__item'><a className='header__link' href="#our">{t("header.link3")}</a></li>
                        <li className='header__item'><a className='header__link' href="#contact">{t("header.link4")}</a></li>
                    </ul>
                    <select
                        className="lang-select"
                        value={i18n.language}
                        onChange={handleChange}
                    >
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                        <option value="uz">O‘zbek</option>
                    </select>

                </div>
            </div>
        </div>
    )
}

export default Header