import React, { useContext } from 'react';
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import { LanguageContext } from '../../context/LanguageContext';
import './ProjectContainer.css';

export const ProjectContainer = (data) => {

  let { theme, project } = data.project

  const { english } = useContext(LanguageContext)

  return (
    < div className={theme == 'dark' ? 'project app__black ' : 'project app__white '} style={{ background: `url(${project.image})` }}>
      <div className='project__container'>
        <h3>{project.name}</h3>
        <br />
        <div className='project__image-div'>
          <a rel="noreferrer" href={project.livePreview} target="_blank">
            <div>
              <img alt="Project Image" src={project.image} height="150px" width="250px" />
            </div>
          </a>
        </div>
        <div className='project__text'>
          <div className='project__description'>
            {
              english ? project.descriptionEN && project.descriptionEN.map(e => (
                <p key={uniqid()}>{e}</p>
              )) :
                project.descriptionES && project.descriptionES.map(e => (
                  <p key={uniqid()}>{e}</p>
                ))
            }
          </div>
          {
            project.stack && (
              <ul className='project__stack'>
                {project.stack.map((item) => (
                  <li key={uniqid()} className='project__stack-item'>
                    {item}
                  </li>
                ))}
              </ul>
            )
          }
          <div className='projects__links'>
            {
              project.sourceCode && (
                <a
                  href={project.sourceCode}
                  aria-label='source code'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )
            }

            {
              project.livePreview && (
                <a
                  href={project.livePreview}
                  aria-label='live preview'
                  className='link link--icon'
                >
                  <LaunchIcon />
                </a>
              )
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProjectContainer
