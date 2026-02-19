import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaInstagram, FaPaperPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./Contact.css";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className='contact' id='contact'>
            <div className="container">
                <div className="contact__container">

                    {/* Title */}
                    <div className="contact__box">
                        <h4 className='contact__title'>{t("contact.title")}</h4>
                        <hr className='contact__hr' />
                    </div>

                    {/* Form + Contact Info */}
                    <div className="contact-form__container">

                        {/* Form */}
                        <div className='form__container'>
                            <form>
                                <div className='input__all'>
                                    <div className='input__one'>
                                        <input
                                            className='one__inp'
                                            type="text"
                                            placeholder='Name'
                                            style={{ fontFamily: "'Lobster Two', cursive" }}
                                            required
                                        />
                                    </div>
                                    <div className='input__two'>
                                        <input
                                            className='two__inp'
                                            type="number"
                                            placeholder='Phone number'
                                            style={{ fontFamily: "'Lobster Two', cursive" }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='three__inp'>
                                    <input
                                        className='three'
                                        type="email"
                                        placeholder='Email'
                                        style={{ fontFamily: "'Lobster Two', cursive" }}
                                        required
                                    />
                                </div>

                                <div className='four__inp'>
                                    <input
                                        className='four'
                                        type="text"
                                        placeholder='Your subject'
                                        style={{ fontFamily: "'Lobster Two', cursive" }}
                                        required
                                    />
                                </div>

                                <div className='five__inp'>
                                    <textarea
                                        className='five'
                                        placeholder='Message'
                                        style={{ fontFamily: "'Lobster Two', cursive" }}
                                    ></textarea>
                                </div>

                                <button
                                    className='contact__btn'
                                    style={{ fontFamily: "'Lobster Two', cursive" }}>{t("contact.btn")} <FaPaperPlane className='send' /></button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className='form__box'>
                            <ul className='form__list'>

                                <li className='form__item'>
                                    <div className='item__div'><MdEmail className='contact__icon' /></div>
                                    <div className='info'>
                                        <h5 className='item__title'>Email</h5>
                                        <a className='item__link' href="mailto:info@luxlineuae.com">info@luxlineuae.com</a>
                                    </div>
                                </li>

                                <li className='form__item'>
                                    <div className='item__div'><MdPhone className='contact__icon' /></div>
                                    <div className='info'>
                                        <h5 className='item__title'>Phone</h5>
                                        <a className='item__link' href="tel:+971521330070">+971 52 133 0070</a>
                                    </div>
                                </li>

                                <li className='form__item'>
                                    <div className='item__div'><MdLocationOn className='contact__icon' /></div>
                                    <div className='info'>
                                        <h5 className='item__title'>Address</h5>
                                        <a className='item__link' href="https://goo.gl/maps/XXXX">11 Shaikh Mohammed Bin Zayed street - Al Sajaah - Sharjah</a>
                                    </div>
                                </li>

                                <li className='form__item'>
                                    <div className='item__div'><FaInstagram className='contact__icon' /></div>
                                    <div className='info'>
                                        <h5 className='item__title'>Instagram</h5>
                                        <a className='item__link' href="https://instagram.com/yourpage" target="_blank" rel="noreferrer">@luxlineuae</a>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
