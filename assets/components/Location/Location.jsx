import React from 'react'

import "./Location.css"
import { useTranslation } from 'react-i18next'
const Location = () => {
    const { t } = useTranslation();
    return (
        <div className='location'>
            <div className="container">
                <div className="location__container">
                    <div className="location__box">
                        <h5 className='location__title'>{t("location.title")}</h5>
                        <p className='location__text'>{t("location.text")}</p>
                    </div>
                    <iframe
                        className='map'
                        src="https://yandex.com/map-widget/v1/-/CCvYkD9"
                        width="100%"
                        height="550"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>

                </div>
            </div>
        </div>
    )
}

export default Location