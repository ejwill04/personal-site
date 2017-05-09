import React from 'react';
import './projects.css';
import github from '../../assets/images/github.png';
import filmfavs from '../../assets/images/project-screenshots/filmfavs.png';
import shootthoubreeze from '../../assets/images/project-screenshots/shootthoubreeze.png';
import neumann from '../../assets/images/project-screenshots/neumann.png';
import snipIt from '../../assets/images/project-screenshots/snip-it.png';

const Projects = () => {
  return (
    <div className='projects-section'>
      <h2 className='section-title'>projects</h2>
      <div className='project-info-wrapper'>

      <div className='project'>
        <a
          target='_blank'
          href='https://neumann.herokuapp.com/'>
          <img
            alt='neumann screenshot'
            className='project-snapshot'
            src={neumann} />
        </a>
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>Neumann</h3>
          <p className='project-description'>Gather and share career information</p>
          <p className='project-description project-tech'>React - React Router - Node - Express - Sass</p>
          <a className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/neumann'>
            <img
              alt='neumann GitHub link'
              src={github}
              className='media-link'/>
          </a>
        </div>
      </div>

      <div className='project'>
        <img
          alt='filmFavs screenshot'
          className='project-snapshot'
          src={filmfavs} />
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>filmFavs</h3>
          <p className='project-description'>Favorite new and popular movies</p>
          <p className='project-description project-tech'>JavaScript - React - React Router - Redux - Sass</p>
          <a className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/movie-tracker'>
            <img
              alt='filmFavs GitHub link'
              src={github}
              className='media-link'/>
          </a>
        </div>
      </div>

      <div className='project'>
        <img
          alt='snip-it screenshot'
          className='project-snapshot'
          src={snipIt} />
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>snip-it</h3>
          <p className='project-description'>Desktop screenshop management tool</p>
          <p className='project-description project-tech'>Electron - React - Sass</p>
          <a className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/snip-it'>
            <img
              alt='snip-it GitHub link'
              src={github}
              className='media-link'/>
          </a>
        </div>
      </div>

      <div className='project'>
        <img
          alt='shoot thou breeze screenshot'
          className='project-snapshot'
          src={shootthoubreeze} />
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>Shoot Thou Breeze</h3>
          <p className='project-description'>Messaging app</p>
          <p className='project-description project-tech'>JavaScript - React - Firebase - Sass</p>
          <a className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/shoot-the-breeze'>
            <img
              alt='shoot thou breeze GitHub link'
              src={github}
              className='media-link'/>
          </a>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Projects;
