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
                                        <p>I love creating applications with different functionalities and learning new technologies.</p>
                                        <p>Currently, I work as a frontend developer, and I enjoy bringing designs to life on the web.</p>
                                        <p>I am seeking to expand my experience in the programming world and take on new challenges where I can apply my learning.</p>

                                    </div>
                                    <div>
                                        <a target="_blanc" href="https://drive.google.com/file/d/1uGmUOOOTqwWoRsgaFjY14imTewKrpLJv/view?usp=drive_link">Download CV</a>
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
                                        <p>Me encanta crear aplicaciones con diversas funcionalidades y aprender nuevas tecnologías.</p>
                                        <p>Actualmente estoy trabajando como desarrollador frontend; disfruto materializando diseños en la realidad de la web.</p>
                                        <p>Busco ampliar mi experiencia en el mundo de la programación y enfrentarme a nuevos desafíos donde pueda aplicar y desarrollar mi aprendizaje.</p>

                                    </div>
                                    <div>
                                        <a target="_blanc" href="https://drive.google.com/file/d/1oU1HSYzzqpBekdOgCcul1g6sjsc8KXnb/view?usp=drive_link">Descargar CV</a>
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