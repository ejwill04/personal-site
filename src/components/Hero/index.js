import React from 'react';
import ReactDOM from 'react-dom'
import headshot from '../../assets/hero-images/headshot.jpg';
import joshtree from '../../assets/hero-images/joshtree.png';
import salkantay from '../../assets/hero-images/salkantay.png';
import venice from '../../assets/hero-images/venice.png';
import falls from '../../assets/hero-images/falls.png';
import blankets from '../../assets/hero-images/blankets.png';

export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      transform: '',
    }
  }

  render() {
    return (
      <section className='collage-wrapper'>
        <img className='hero-image-collage' src={headshot} width={300} height={300}/>
        <img className='hero-image-collage mobile-collage' src={joshtree} width={300} height={300}/>
        <img className='hero-image-collage mobile-collage' src={blankets} width={300} height={300}/>
        <img className='hero-image-collage mobile-collage' src={venice} width={300} height={300}/>
        <img className='hero-image-collage mobile-collage' src={salkantay} width={300} height={300}/>
        <img className='hero-image-collage mobile-collage' src={falls} width={300} height={300}/>
      </section>
    );
  }
}
