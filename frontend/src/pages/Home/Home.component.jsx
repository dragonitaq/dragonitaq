import React from 'react';
import { Link } from '@reach/router';

import NavBtn from '../../components/nav-btn/navBtn.component.jsx';
import NavOverlay from '../../components/nav-overlay/navOverlay.component.jsx';

import htmlIcon from '../../assets/html.png';
import ejsIcon from '../../assets/ejs.png';
import pugIcon from '../../assets/pug.png';
import cssIcon from '../../assets/css.png';
import sassIcon from '../../assets/sass.png';
import jsIcon from '../../assets/js.png';
import reactIcon from '../../assets/react.png';
import nodeIcon from '../../assets/node.png';
import expressIcon from '../../assets/express.png';
import mongooseIcon from '../../assets/mongoose.png';
import socketioIcon from '../../assets/socketio.png';
import githubIcon from '../../assets/github.png';
import charadesgo from '../../assets/charadesgo-screenshot.png';
import mjgift from '../../assets/mjgift-screenshot.png';
import wisdomage from '../../assets/wisdomage-screenshot.png';

import './Home.style.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavOverlay: false,
    };
    // this.handleNavBtnClick = this.handleNavBtnClick.bind(this);
  }

  handleNavBtnClick = () => {
    this.setState({
      showNavOverlay: !this.state.showNavOverlay,
    });
  };

  render() {
    return (
      <div className='main'>
        {this.state.showNavOverlay ? <NavOverlay handleNavBtnClick={this.handleNavBtnClick} /> : null}
        {!this.state.showNavOverlay ? (
          <button
            onClick={() => {
              this.handleNavBtnClick();
            }}
          >
            <NavBtn />
          </button>
        ) : null}
        {/* Section Hero */}
        <section className='hero'>
          <h1 className='hero__name'>I'm Kevin</h1>
          <p className='hero__role'>a junior full-stack web developer</p>
        </section>
        {/* Section About */}
        <section className='about' id='about'>
          <h2 className='about__title'>Little about me</h2>
          <div className='about__container'>
            <p className='about__description--1'>
              I'm a junior full-stack web developer from South East Asia who brings his electric guitar 🎸 & rocks 🤘 on stage during his time in university; but not anymore in his adulthood.
            </p>
            <p className='about__description--2'>
              It's not that sad because I found another passion which is to programmatically build something! My first programming experience was with Visual Basic for Excel.
            </p>
            <p className='about__description--3'>Little fact: I was from corporate training & consultancy business before being as web dev.</p>
          </div>
        </section>
        {/* Section Portfolio */}
        <section className='portfolio' id='portfolio'>
          <h2 className='portfolio__title'>Portfolio</h2>
          <div className='projects'>
            <div className='project'>
              <a href='https://charadesgo.netlify.app/' target='_blank' className='project__title'>
                <span>&#128279;</span> Charades Go
              </a>
              <a href='https://charadesgo.netlify.app/' target='_blank'>
                <img className='project__screenshot' src={charadesgo} alt='screenshot of charadesgo website' />
              </a>
              <p>A web game for traditional party word guessing game called charades. This is built using MERN stack technologies.</p>
              <p>You can select your language and set the play duration. It also has sound effect for gameplay.</p>
            </div>
            <div className='project'>
              <a href='https://mjgift.herokuapp.com/' target='_blank' className='project__title'>
                <span>&#128279;</span> MJ Gift
              </a>
              <a href='https://mjgift.herokuapp.com/' target='_blank'>
                <img className='project__screenshot' src={mjgift} alt='screenshot of charadesgo website' />
              </a>
              <p>MJ Gift is a Facebook gift shop which focuses on practicability and aesthetic in mind.</p>
              <p>A standard website with carousel pictures & videos gallery. It also comes with contact form for enquiry.</p>
            </div>
            <div className='project'>
              <a href='https://wisdomage.netlify.app/' target='_blank' className='project__title'>
                <span>&#128279;</span> Wisdom Age
              </a>
              <a href='https://wisdomage.netlify.app/' target='_blank'>
                <img className='project__screenshot' src={wisdomage} alt='screenshot of charadesgo website' />
              </a>
              <p>Wisdom Age is a training provider who provides corporate training & consultant services as well as simulation workshop design.</p>
              <p>This is built using plain HTML & CSS for simple landing page purpose.</p>
            </div>
          </div>
        </section>
        {/* Section Skills */}
        <section className='skills' id='skills'>
          <h2 className='skills__title'>Technologies</h2>
          <div className='skills__container'>
            <p className='skills__description'>Technologies I'm familiar with:</p>
            <ul>
              <li>
                <img className='tech-icon' src={htmlIcon} alt='html icon' />
                <p className='tech-label'>HTML</p>
              </li>
              <li>
                <img className='tech-icon' src={ejsIcon} alt='ejs icon' />
                <p className='tech-label'>EJS</p>
              </li>
              <li>
                <img className='tech-icon' src={pugIcon} alt='pug icon' />
                <p className='tech-label'>Pug</p>
              </li>
              <li>
                <img className='tech-icon' src={cssIcon} alt='css icon' />
                <p className='tech-label'>CSS</p>
              </li>
              <li>
                <img className='tech-icon' src={sassIcon} alt='sass icon' />
                <p className='tech-label'>SASS</p>
              </li>
              <li>
                <img className='tech-icon' src={jsIcon} alt='javascript icon' />
                <p className='tech-label'>JavaScript</p>
              </li>
              <li>
                <img className='tech-icon' src={reactIcon} alt='react icon' />
                <p className='tech-label'>React</p>
              </li>
              <li>
                <img className='tech-icon' src={nodeIcon} alt='node.js icon' />
                <p className='tech-label'>Node.js</p>
              </li>
              <li>
                <img className='tech-icon' src={expressIcon} alt='express icon' />
                <p className='tech-label'>Express</p>
              </li>
              <li>
                <img className='tech-icon' src={mongooseIcon} alt='mongoose icon' />
                <p className='tech-label'>Mongoose</p>
              </li>
              <li>
                <img className='tech-icon' src={socketioIcon} alt='socketio icon' />
                <p className='tech-label'>Socket IO</p>
              </li>
            </ul>
          </div>
          <div className='layman-term'>
            <h3 className='layman-term__title'>Layman’s Terms</h3>
            <p className='layman-term__text'>These technologies allow me to build the content you see on the web.</p>
            <p>They also allow me to handle the server operations behind the screen which power the content on the web.</p>
            <p>Hope you get the point. 😉</p>
          </div>
        </section>
        {/* Section Contact */}
        <section className='contact' id='contact'>
          <h1 className='contact__title'>Contact Me</h1>
          <form action='/enquiry-form' method='POST' id='contact-form__form' className='contact-form'>
            <input type='text' id='name' name='name' placeholder='Name' />
            <input type='email' id='email' name='email' placeholder='Email' />
            <textarea id='msg' name='msg' rows='10' cols='50' placeholder='Message'></textarea>
            <button type='submit' className='submit'>
              Send
            </button>
          </form>
          <div className='visit-github'>
            <p className='visit-github__text'>Visit me at</p>
            <a className='visit-github__link' href='https://github.com/dragonitaq' target='_blank'>
              <img className='github-icon' src={githubIcon} alt='github icon' />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;
