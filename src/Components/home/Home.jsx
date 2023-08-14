import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';
import './Home.css'

export const Home = () => {

    const { english } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme == 'dark' ? 'home app__black ' : 'home app__white '} id='home'>
            {
                english ? (
                    <div className='home__text'>
                        <svg className="home__svg-upper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 317"><path fill-opacity="1" d="M0,64L40,58.7C80,53,160,43,240,32C320,21,400,11,480,32C560,53,640,107,720,138.7C800,171,880,181,960,176C1040,171,1120,149,1200,117.3C1280,85,1360,43,1400,21.3L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                        <div className='home__container'>
                            <span>Hello</span>
                            <h2>I'm <strong>Sebastian Delescabe</strong></h2>
                            <p>Web Developer</p>
                            <a className='home_button' href='#about'>See More</a>
                        </div>
                        <svg className="home__svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill-opacity="1" d="M0,64L40,58.7C80,53,160,43,240,32C320,21,400,11,480,32C560,53,640,107,720,138.7C800,171,880,181,960,176C1040,171,1120,149,1200,117.3C1280,85,1360,43,1400,21.3L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                    </div>
                )
                    :
                    (
                        <div className='home__text'>
                            <svg className="home__svg-upper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill-opacity="1" d="M0,64L40,58.7C80,53,160,43,240,32C320,21,400,11,480,32C560,53,640,107,720,138.7C800,171,880,181,960,176C1040,171,1120,149,1200,117.3C1280,85,1360,43,1400,21.3L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                            <div className='home__container'>
                                <span>Hola</span>
                                <h2>Soy <strong>Sebastian Delescabe</strong></h2>
                                <p>Programador web Full stack</p>
                                <a className='home_button' href='#about'>Conocer</a>
                            </div>
                            <svg className="home__svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill-opacity="1" d="M0,64L40,58.7C80,53,160,43,240,32C320,21,400,11,480,32C560,53,640,107,720,138.7C800,171,880,181,960,176C1040,171,1120,149,1200,117.3C1280,85,1360,43,1400,21.3L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                        </div>
                    )
            }
        </div >
    )
}
