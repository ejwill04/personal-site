import React from 'react';
import './header.css';
var classNames = require('classnames');
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import email from '../../assets/images/email.png';
// import WavesIcon from '../../assets/patterns/WavesIcon.js';
// import MtnsIcon from '../../assets/patterns/MtnsIcon.js';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    let status = scrollTop > 10 ? true : false;
    this.setState({ scrolled: status });
  }

  render() {
    let mobileClass = classNames({ 'scrolled' : this.state.scrolled, 'scroll-wrapper': true })
    let subHeaderClass = classNames({ 'sub-header-scrolled' : this.state.scrolled, 'header-sub-title': true })
    return (
      <section className='header'>

        <div className='header-content'>
          <span className='header-wrapper'>
            <h1 className='header-title'>Elijah J. Williams</h1><h5 className={subHeaderClass}>front-end developer</h5>
          </span>

          <div className={mobileClass}>
            <div className='nav-btn-wrapper'>
              <button
                className='about-btn nav-btn'
                onClick={ () => {this.props.displayBody('About')}}
                >about
              </button>
              <button
                className='projects-btn nav-btn'
                onClick={ () => {this.props.displayBody('Projects')}}
                >projects
              </button>
            </div>

            <div className='contact-btn-wrapper'>
              <a
                href="https://www.linkedin.com/in/elijahwilliams"
                target="_blank">
                <img
                  className="media-link"
                  src={linkedin} />
              </a>
              <a
                href="https://github.com/ejwill04"
                target="_blank">
                <img
                  className="media-link"
                  src={github} />
              </a>
              <a
                href="mailto:ejwill04@gmail.com"
                target="_blank">
                <img
                  className="media-link"
                  src={email} />
              </a>
            </div>
          </div>

        </div>

      </section>
    );
  }
}
