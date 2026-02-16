import React from 'react'

import "./Article.css"
import { useTranslation } from 'react-i18next'

import video from "./video/video.mp4"
const Article = () => {
    const { t } = useTranslation()
    return (
        <div className='article'>
            <div className="container">
                <div className="article__container">
                    <div className="article__box">
                        <h3 className='article__title'>{t("article.title")}</h3>
                        <hr className='hr' />
                        <p className='article__text'>{t("article.text")}</p>
                    </div>
                    <ul className='article__list'>
                        <li className='article__item'>
                            <h4 className='article-item__title'>{t("article.title1")}</h4>
                            <p className='article-item__text'>{t("article.text1")}</p>
                        </li>
                        <li className='article__item'>
                            <h4 className='article-item__title'>{t("article.title2")}</h4>
                            <p className='article-item__text'>{t("article.text2")}</p>
                        </li>
                        <li className='article__item'>
                            <h4 className='article-item__title'>{t("article.title3")}</h4>
                            <p className='article-item__text'>{t("article.text3")}</p>
                        </li>
                    </ul>
                    <div className="article__video">
                          <video src={video} controls width="100%" height="auto"></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article