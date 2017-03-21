import React from 'react';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import email from '../../assets/images/email.png';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className='section-title'>contact</h2>
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
    </section>
  );
}

export default Contact;
