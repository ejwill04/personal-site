import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      sectionDisplayed: '',
    }
    this.displayBody = this.displayBody.bind(this);
  }

  displayBody(section) {
    this.setState({ sectionDisplayed: section });
  }

  render() {
    return (
      <div>
        <Header
          displayBody={this.displayBody}
        />
        {this.state.sectionDisplayed !== 'Projects' ? <Hero /> : null}
        {this.state.sectionDisplayed === 'Projects' ? <Projects /> : <About />}
        <Footer />
      </div>
    );
  }
}
