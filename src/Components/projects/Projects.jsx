import React, { useContext } from "react";
import uniqid from 'uniqid'
import { projects } from '../../Data/projectsInfo'
import { ProjectContainer } from '../projectContainer/ProjectContainer'
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from "../../context/LanguageContext";
import './Projects.css'

export const Projects = () => {

  const { theme } = useContext(ThemeContext)
  const { english } = useContext(LanguageContext)

  if (!projects.length) return null

  return (
    <section id='projects' className={theme == 'dark' ? 'projects app__black ' : 'projects app__white '}>
      <svg className="project__svg-upper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill-opacity="1" d="M0,64L120,58.7C240,53,480,43,720,58.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

      <div className='projects'>
        {
          english ? (
            <h2 className='section__title'>My Works</h2>
          )
            :
            (
              <h2 className='section__title'>Proyectos Destacados</h2>
            )
        }
        <div className='projects__grid'>
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={{ theme, project }} />
          ))}
        </div>
      </div>
    </section>
  )
}

