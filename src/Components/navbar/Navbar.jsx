import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';
import navbarInfo from '../../Data/navbarInfo';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import './Navbar.css';

export const Navbar = () => {

    /* Contexts */
    const { setEnglish, english } = useContext(LanguageContext)
    const { theme, setTheme } = useContext(ThemeContext)

    /* Estados */
    const [mobileMenu, setMobileMenu] = useState(false)
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY != 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])


    if (navbarInfo) {
        return (
            <div className={scroll ? 'navbar__scroll' : 'navbar'} >
                <div className={!mobileMenu ? 'navbar__container' : 'navbar__container-mobile'}>
                    <div className='navbar__container-logo'>
                        <a href="#home">S D</a>
                    </div>
                    <div className='navbar__container-links'>
                        {
                            english && english ?
                                navbarInfo.englishLinks.map((e) => (
                                    <a href={e.link} onClick={() => setMobileMenu(false)}>{e.name}</a>
                                ))
                                :
                                navbarInfo.spanishLinks.map((e) => (
                                    <a href={e.link} onClick={() => setMobileMenu(false)}>{e.name}</a>
                                ))
                        }
                    </div>
                    <div className='navbar__container-language'>
                        <a className={english && 'active'} onClick={() => setEnglish(true)} >EN</a>
                        <a className={!english && 'active'} onClick={() => setEnglish(false)}>ES</a>
                        {
                            theme == 'dark' ?
                                <div>
                                    <BsFillMoonFill onClick={() => setTheme('ligth')} />
                                </div>
                                :
                                <div>
                                    <BsFillSunFill onClick={() => setTheme('dark')} />
                                </div>

                        }
                    </div>
                    <div className='navbar__container-hamburger'>
                        <RxHamburgerMenu onClick={() => setMobileMenu(!mobileMenu)} />
                        <RxCross1 onClick={() => setMobileMenu(!mobileMenu)} />
                    </div>
                </div>
            </div>
        )
    }
}
