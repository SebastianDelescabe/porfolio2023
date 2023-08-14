import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from '../../context/ThemeContext';
import retrato from '../../Data/img/imageAbout1.jpg';
import "./About.css";

export const About = () => {
    const { english } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme == 'dark' ? 'about app__black ' : 'about app__white '} id='about'>
            <div className="about__container">
                <div className="about__container-text-image">
                    {
                        english ?
                            (
                                <div className="about__container-text">
                                    <span >Know</span>
                                    <span >About Me</span>
                                    <div></div>
                                    <div>
                                        <p>I am a computer programming student with knowledge in web development. I love creating applications with different functionalities and learning new technologies.</p>
                                        <p>I would like to be able to apply the knowledge learned as part of work teams that allow me to develop my skills and grow professionally</p>
                                        <p>I seek to expand my experience in the world of programming and meet new challenges where I can exploit my learning.</p>
                                    </div>
                                    <div>
                                        <a target="_blanc" href="https://drive.google.com/file/d/1AcTsIA6Kg-kWq8jKINCI9zdXCNnSqSkX/view?usp=drive_link">Download CV</a>
                                        <a href="#contact">Contact</a>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="about__container-text">
                                    <span >Conocé</span>
                                    <span >Sobre Mí</span>
                                    <div></div>
                                    <div>
                                        <p>Me encanta crear aplicaciones con diferentes funcionalidades y aprender nuevas tecnologías.</p>
                                        <p>Actualmente me encuentro trabajando como desarrollador frontend, me gusta llevar diseños a la realidad de la web.</p>
                                        <p>Busco ampliar mi experiencia en el mundo de la programación y encontrarme con nuevos desafíos donde pueda explotar mi aprendizaje.</p>
                                    </div>
                                    <div>
                                        <a target="_blanc" href="https://drive.google.com/file/d/1AcTsIA6Kg-kWq8jKINCI9zdXCNnSqSkX/view?usp=drive_link">Descargar CV</a>
                                        <a href="#contact">Contactame</a>
                                    </div>
                                </div>
                            )
                    }
                    <div className="about__container-image">
                        <img src={retrato} alt="" />
                    </div>
                </div>
            </div>
            <svg className="about__svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill-opacity="1" d="M0,64L120,58.7C240,53,480,43,720,58.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </div >
    );
}