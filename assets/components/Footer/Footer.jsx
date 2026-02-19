import React from 'react'

import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSprayCan } from "@fortawesome/free-solid-svg-icons";
import { FaInstagram, FaTelegramPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { MdEmail, MdPhone } from "react-icons/md";
const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__container">
                    <div className="all__box">
                        <div className="one__box">
                            <div className='footer__logo'>
                                <FontAwesomeIcon className='icon' icon={faSprayCan} size='3x' />
                                <div className='logo__box'>
                                    <h1 className='icon__title'>LUXURY LINE</h1>
                                    <p className='icon__text'>PERFUMES</p>
                                </div>
                            </div>
                            <a className='footer__link' href="#">{t("footer.link")}</a>
                        </div>
                        <div className="two__box">
                            <h6 className='footer__title'>{t("footer.title")}</h6>
                            <a className='footer-box__link' href="#">Call: +971 52 133 0070</a>
                            <a className='footer-box__link' href="#">Email : info@luxlineuae.com</a>
                            <a className='footer-box__link' href="#">Email : bakhti@luxlineuae.com</a>
                        </div>
                        <div className="three__box">
                            <h6 className='footer__title'>{t("footer.title1")}</h6>
                            <div className='one__link'>
                                <div className='footer__icons'>
                                    <MdEmail className='footer__icon' />
                                </div>
                                <a className='footer-box__link' href="#">info@luxuryline.com</a>
                            </div>
                            <div className='two__link'>
                                <div className='footer__icons'>
                                    <MdPhone className='footer__icon' />
                                </div>
                                <a className='footer-box__link' href="#">+998 94 608 88 19</a>
                            </div>
                        </div>
                        <div className="four__box">
                            <h6 className='footer__title'>{t("footer.title2")}</h6>
                            <div className='four__icon'>
                                <a className='footer-two__link' href="#"><FaInstagram className='footer-two__links' /></a>
                                <a className='footer-two__link' href="#"><FaTelegramPlane className='footer-two__links' /></a>
                                <a className='footer-two__link' href="#"><FaGithub className='footer-two__links' /></a>
                                <a className='footer-two__link' href="#"><FaLinkedin className='footer-two__links' /></a>
                            </div>
                        </div>
                    </div>
                    <hr className='footer__hr' />
                    <p className='end__text'>2026 All Rights Reserved © 2026</p>
                </div>
            </div>
        </div>
    )
}

export default Footer