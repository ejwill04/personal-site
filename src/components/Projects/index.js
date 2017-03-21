import React from 'react';
import './projects.css';
import github from '../../assets/images/github.png';
import twodobox from '../../assets/images/project-screenshots/twodobox.png';
import filmfavs from '../../assets/images/project-screenshots/filmfavs.png';
import frogger from '../../assets/images/project-screenshots/frogger.png';
import shootthoubreeze from '../../assets/images/project-screenshots/shootthoubreeze.png';
import weathrly from '../../assets/images/project-screenshots/weathrly.png';
import chucknorris from '../../assets/images/project-screenshots/chucknorris.png';
import neumann from '../../assets/images/project-screenshots/neumann.png';

const Projects = () => {
  return (
    <div className='projects-section'>
      <h2 className='section-title'>projects</h2>
      <div className='project-info-wrapper'>

      <div className='project'>
        <img
          className='project-snapshot'
          src={neumann} />
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>Neumann</h3>
          <p className='project-description'>Turing student job portal</p>
          <p className='project-description project-tech'>React - React Router - Redux - Node - Sass</p>
          <a className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/self-directed-project'>
            <img src={github} className='media-link'/>
          </a>
        </div>
      </div>

      <div className='project'>
        <img
          className='project-snapshot'
          src={filmfavs} />
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>filmFavs</h3>
          <p className='project-description'>Favorite new and popular movies</p>
          <p className='project-description project-tech'>JavaScript - React - React Router - Redux - Sass</p>
          <a className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/movie-tracker'>
            <img src={github} className='media-link'/>
          </a>
        </div>
      </div>


      <div className='project'>
        <img
          className='project-snapshot'
          src={shootthoubreeze} />
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>Shoot Thou Breeze</h3>
          <p className='project-description'>Messaging app</p>
          <p className='project-description project-tech'>JavaScript - React - Firebase - Sass</p>
          <a className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/shoot-the-breeze'>
            <img src={github} className='media-link'/>
          </a>
        </div>
      </div>

      <div className='project'>
        <img
          className='project-snapshot'
          src={twodobox} />
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>2DoBox</h3>
          <p className='project-description'>A reminder app</p>
          <p className='project-description project-tech'>JavaScript</p>
          <a className='project-link'
            target='_blank'
            href=''>
            <img src={github} className='media-link'/>
          </a>
        </div>
      </div>

      <div className='project'>
        <img
          className='project-snapshot'
          src={chucknorris} />
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>Chuck Norris Jokes</h3>
          <p className='project-description'>Get those Chuck Norris jokes</p>
          <p className='project-description project-tech'>JavaScript - React - React Router - Sass</p>
          <a className='project-link'
            target='_blank'
            href=''>
            <img src={github} className='media-link'/>
          </a>
        </div>
      </div>

      <div className='project'>
        <img
          className='project-snapshot'
          src={weathrly} />
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>Weathrly</h3>
          <p className='project-description'>Check local weather using API</p>
          <p className='project-description project-tech'>JavaScript - React</p>
          <a className='project-link'
            target='_blank'
            href=''>
            <img src={github} className='media-link'/>
          </a>
        </div>
      </div>

      <div className='project'>
        <img
          className='project-snapshot'
          src={frogger} />
        <div className='project-desc-wrapper'>
          <h3 className='project-name'>Frogger</h3>
          <p className='project-description'>The classic arcade game frogger</p>
          <p className='project-description project-tech'>JavaScript - Canvas</p>
          <a className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/frogger'>
            <img src={github} className='media-link'/>
          </a>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Projects;
