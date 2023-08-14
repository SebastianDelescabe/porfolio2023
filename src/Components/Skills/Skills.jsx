import React, { useContext } from "react";
import uniqid from 'uniqid'
import { ThemeContext } from '../../context/ThemeContext';
import { skills } from '../../Data/skills'
import './Skills.css'

export const Skills = () => {

  const { theme } = useContext(ThemeContext)

  if (!skills.length) return null
  return (
    <section className={theme == 'dark' ? 'skills app__black ' : 'skills app__white '} id='skills'>
      <div className='skills'>
        <h2 className='section__title'>Skills</h2>
        <ul className='skills__list'>
          {skills.map((skill) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <svg className='contact__svg-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 315"><path fill-opacity="1" d="M0,32L60,32C120,32,240,32,360,58.7C480,85,600,139,720,133.3C840,128,960,64,1080,74.7C1200,85,1320,171,1380,213.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </section>
  );
}