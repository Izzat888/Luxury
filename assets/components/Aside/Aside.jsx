import React from 'react'

import "./Aside.css"
import { useTranslation } from 'react-i18next'
const Aside = () => {
    const {t} = useTranslation();
  return (
    <div className='aside'>
        <div className="container">
            <div className="aside__container">
                <div className="aside__box">
                    <h5 className='aside__title'>{t("aside.title")}</h5>
                    <p className='aside__text'>{t("aside.text")}</p>
                </div>
                <ul className='aside__list'>
                    <li className='aside__item'>
                        <h6 className='aside-item__title'>{t("aside.title1")}</h6>
                        <p className='aside-item__text'>{t("aside.text1")}</p>
                    </li>
                    <li className='aside__item'>
                        <h6 className='aside-item__title'>{t("aside.title2")}</h6>
                        <p className='aside-item__text'>{t("aside.text2")}</p>
                    </li>
                    <li className='aside__item'>
                        <h6 className='aside-item__title'>{t("aside.title3")}</h6>
                        <p className='aside-item__text'>{t("aside.text3")}</p>
                    </li>
                    <li className='aside__item'>
                        <h6 className='aside-item__title'>{t("aside.title4")}</h6>
                        <p className='aside-item__text'>{t("aside.text4")}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Aside