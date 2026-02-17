import React from 'react'

import "./Section.css"
import { useTranslation } from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Section = () => {
    const { t } = useTranslation();
    return (
        <div className='section'>
            <div className="container">
                <div className="section__container">
                    <div className="section__box">
                        <h4 className='section__title'>{t("section.title")}</h4>
                        <p className='section__text'>{t("section.text")}</p>
                        <hr className='section__hr' />
                    </div>
                    <ul className='section__list'>
                        <li className='section__item'>
                            <p className='section-item__number'>01</p>
                            <h5 className='section-item__title'>{t("section.title1")}</h5>
                            <p className='section-item__text'>{t("section.text1")}</p>
                        </li>
                        <li className='section__item'>
                            <p className='section-item__number'>02</p>
                            <h5 className='section-item__title'>{t("section.title2")}</h5>
                            <p className='section-item__text'>{t("section.text2")}</p>
                        </li>
                        <li className='section__item'>
                            <p className='section-item__number'>03</p>
                            <h5 className='section-item__title'>{t("section.title3")}</h5>
                            <p className='section-item__text'>{t("section.text3")}</p>
                        </li>
                        <li className='section__item'>
                            <p className='section-item__number'>04</p>
                            <h5 className='section-item__title'>{t("section.title4")}</h5>
                            <p className='section-item__text'>{t("section.text4")}</p>
                        </li>
                        <li className='section__item'>
                            <p className='section-item__number'>05</p>
                            <h5 className='section-item__title'>{t("section.title5")}</h5>
                            <p className='section-item__text'>{t("section.text5")}</p>
                        </li>
                    </ul>
                </div>
                <div className="accordion__container">
                    <h4 className='accordin__title'>{t("section.title10")}</h4>
                    <p className='accordion__text'>{t("section.text10")}</p>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ padding: "8px" }}
                        >
                            <Typography style={{ fontFamily: "'Lobster Two', cursive", marginLeft: "25px", fontSize: "25px", color: "#8a0194", opacity: "0.8", letterSpacing: "2px" }}>
                                {t("section.title6")}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: "'Lobster Two', cursive", marginLeft: "25px", fontSize: "20px", color: "#721378", letterSpacing: "3px" }}>
                                {t("section.text6")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            style={{ padding: "8px" }}
                        >
                            <Typography style={{ fontFamily: "'Lobster Two', cursive", marginLeft: "25px", fontSize: "25px", color: "#8a0194", opacity: "0.8", letterSpacing: "2px" }}>
                                {t("section.title7")}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: "'Lobster Two', cursive", marginLeft: "25px", fontSize: "20px", color: "#721378", letterSpacing: "3px" }}>
                                {t("section.text7")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                            style={{ padding: "8px" }}
                        >
                            <Typography style={{ fontFamily: "'Lobster Two', cursive", marginLeft: "25px", fontSize: "25px", color: "#8a0194", opacity: "0.8", letterSpacing: "2px" }}>
                                {t("section.title8")}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: "'Lobster Two', cursive", marginLeft: "25px", fontSize: "20px", color: "#721378", letterSpacing: "3px" }}>
                                {t("section.text8")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4-content"
                            id="panel4-header"
                            style={{ padding: "8px" }}
                        >
                            <Typography style={{ fontFamily: "'Lobster Two', cursive", marginLeft: "25px", fontSize: "25px", color: "#8a0194", opacity: "0.8", letterSpacing: "2px" }}>
                                {t("section.title9")}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontFamily: "'Lobster Two', cursive", marginLeft: "25px", fontSize: "20px", color: "#721378", letterSpacing: "3px" }}>
                                {t("section.text9")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
        </div>
    )
}

export default Section