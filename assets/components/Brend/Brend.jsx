import React, { useState } from 'react';
import "./Brend.css";
import { useTranslation } from 'react-i18next';
import br1 from "./images/photo8.png";
import br2 from "./images/photo9.png";
import br3 from "./images/photo10.png";
import br4 from "./images/photo11.png";
import br5 from "./images/photo12.png";

const Brend = () => {
    const { t } = useTranslation();
    const [hoverIndex, setHoverIndex] = useState(null);

    const brands = [
        { src: br1, text: "Global Partner" },
        { src: br2, text: "Luxury Quality" },
        { src: br3, text: "Eco Friendly" },
        { src: br4, text: "Premium Scent" },
        { src: br5, text: "Handmade" },
    ];

    return (
        <div className='brend'>
            <div className="container">
                <div className="brend__container">
                    <div className="brend__box">
                        <h5 className='brend__title'>{t("brend.title")}</h5>
                        <p className='brend__text'>{t("brend.text")}</p>
                    </div>
                    <ul className='brend__list'>
                        {brands.map((brand, index) => (
                            <li
                                key={index}
                                className='brend__item'
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                                style={{
                                    transform: hoverIndex === index ? "scale(1.2)" : "scale(1)",
                                    zIndex: hoverIndex === index ? 10 : 1,
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                <img style={{ borderRadius: "20px" }} width={150} height={100} src={brand.src} alt="" />
                                <p className='brend-item__text'>{brand.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brend;
