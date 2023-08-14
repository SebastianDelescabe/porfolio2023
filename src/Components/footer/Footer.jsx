import React from 'react'
import { GrLinkedinOption, GrFacebookOption, GrTwitter, GrYoutube } from "react-icons/gr";

import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__container-info'>
                    <span>sebastiandelescabe@gmail.com</span>
                    <span>Buenos Aires, Argentina</span>
                    <span>(+54) 1132969054</span>
                </div>
                <div className='footer__container-media'>
                    <a target="_blanc" href="https://ar.linkedin.com/in/sebastian-delescabe"><GrLinkedinOption className='react-icon'></GrLinkedinOption></a>
                    <a href="/#"><GrFacebookOption className='react-icon'></GrFacebookOption></a>
                    <a href="/#"><GrTwitter className='react-icon'></GrTwitter></a>
                    <a href="/#"><GrYoutube className='react-icon'></GrYoutube></a>
                </div>
            </div>
        </div>
    )
}
