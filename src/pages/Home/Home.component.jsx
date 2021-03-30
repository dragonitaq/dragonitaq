/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { withController } from 'react-scroll-parallax';
import { CSSTransition } from 'react-transition-group';

import NavBtn from '../../components/nav-btn/navBtn.component.jsx';
import NavOverlay from '../../components/nav-overlay/navOverlay.component.jsx';

import htmlIcon from '../../assets/html.png';
import ejsIcon from '../../assets/ejs.png';
import pugIcon from '../../assets/pug.png';
import cssIcon from '../../assets/css.png';
import sassIcon from '../../assets/sass.png';
import jsIcon from '../../assets/js.png';
import reactIcon from '../../assets/react.png';
import reduxIcon from '../../assets/redux.png';
import scIcon from '../../assets/sc.png';
import nodeIcon from '../../assets/node.png';
import expressIcon from '../../assets/express.png';
import mongooseIcon from '../../assets/mongoose.png';
import socketioIcon from '../../assets/socketio.png';
import githubIcon from '../../assets/github.png';
import charadesgo from '../../assets/charadesgo-screenshot.png';
import mjgift from '../../assets/mjgift-screenshot.png';
import wisdomage from '../../assets/wisdomage-screenshot.png';

import arrowDown from '../../assets/arrow-down.png';

// Background SVG
import cloud1 from '../../assets/background/cloud1.svg';
import cloud2 from '../../assets/background/cloud2.svg';
import cloud3 from '../../assets/background/cloud3.svg';
import airplane1 from '../../assets/background/airplane1.svg';
import airplane2 from '../../assets/background/airplane2.svg';
import birds from '../../assets/background/birds.svg';
import kite from '../../assets/background/kite.svg';
import rocket from '../../assets/background/rocket.svg';
import rainbow from '../../assets/background/rainbow.svg';
import mountain from '../../assets/background/mountain.svg';

import './Home.style.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavOverlay: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.props.parallaxController.update();
    });
  }

  handleNavBtnClick = () => {
    this.setState({
      showNavOverlay: !this.state.showNavOverlay,
    });
  };

  render() {
    return (
      <div className='main'>
        {/* Something is weird behaving with this transition. I made it work but looks against the doc. The "in" props doesn't behave like the doc said. The component will enter animation regardless. */}
        <CSSTransition in={this.state.showNavOverlay} timeout={300} classNames='nav-overlay-animate'>
          {this.state.showNavOverlay ? <NavOverlay handleNavBtnClick={this.handleNavBtnClick} /> : <div></div>}
        </CSSTransition>
        {!this.state.showNavOverlay ? <NavBtn handleNavBtnClick={this.handleNavBtnClick} /> : <div></div>}
        {/* Section Hero */}
        <section className='hero'>
          <Parallax className='parallax__cloud1' y={[-150, 150]} x={[-50, 50]}>
            <img src={cloud1} alt='' />
          </Parallax>
          <Parallax className='parallax__birds' y={[-250, 250]} x={[20, -20]}>
            <img src={birds} alt='' />
          </Parallax>
          <Parallax className='parallax__kite' y={[0, 400]} x={[0, -100]}>
            <img src={kite} alt='' />
          </Parallax>
          <h1 className='hero__name'>I'm Kevin</h1>
          <p className='hero__role'>a junior full-stack web developer</p>
          <img className='arrow-down' src={arrowDown} alt='arrow down' />
        </section>
        {/* Section About */}
        <section className='about' id='about'>
          <Parallax className='parallax__cloud2' y={[-80, 80]} x={[50, -50]}>
            <img src={cloud2} alt='' />
          </Parallax>
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
          <Parallax className='parallax__rocket' y={[-200, -500]} x={[0, 0]}>
            <img src={rocket} alt='' />
          </Parallax>
          <Parallax className='parallax__cloud3' y={[0, 150]} x={[0, -100]}>
            <img src={cloud3} alt='' />
          </Parallax>
          <h2 className='portfolio__title'>Portfolio</h2>
          <div className='projects'>
            <div className='project'>
              <a href='https://charadesgo.netlify.app/' target='_blank' className='project__title'>
                <span>&#128279;</span> Charades Go
              </a>
              <a href='https://charadesgo.netlify.app/' target='_blank'>
                <img className='project__screenshot' src={charadesgo} alt='screenshot of charadesgo website' />
              </a>
              <p>A web game for traditional party word guessing game called charades. It's great for family occasion.</p>
              <p>You can select your language and set the play duration. It also has sound effect for the gameplay. Powered by MERN stack technologies.</p>
            </div>
            <div className='project'>
              <a href='https://mjgift.herokuapp.com/' target='_blank' className='project__title'>
                <span>&#128279;</span> MJ Gift
              </a>
              <a href='https://mjgift.herokuapp.com/' target='_blank'>
                <img className='project__screenshot' src={mjgift} alt='screenshot of charadesgo website' />
              </a>
              <p>MJ Gift is a Facebook gift shop which focuses on practicability and aesthetic in mind.</p>
              <p>A standard website with image carousel & video gallery as well as contact form for enquiry.</p>
            </div>
            <div className='project'>
              <a href='https://wisdomage.netlify.app/' target='_blank' className='project__title'>
                <span>&#128279;</span> Wisdom Age
              </a>
              <a href='https://wisdomage.netlify.app/' target='_blank'>
                <img className='project__screenshot' src={wisdomage} alt='screenshot of charadesgo website' />
              </a>
              <p>Wisdom Age is a training provider who provides corporate training, simulation workshop & consultant services.</p>
              <p>This is built using plain HTML & CSS for simple landing page purpose with contact form for enquiry.</p>
            </div>
          </div>
        </section>
        {/* Section Skills */}
        <section className='skills' id='skills'>
          <Parallax className='parallax__rainbow' y={[-25, 25]} x={[-50, 50]}>
            <img src={rainbow} alt='' />
          </Parallax>
          <Parallax className='parallax__airplane1' y={[-50, 50]} x={[100, -100]}>
            <img src={airplane1} alt='' />
          </Parallax>
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
                <img className='tech-icon' src={reduxIcon} alt='redux icon' />
                <p className='tech-label'>Redux</p>
              </li>
              <li>
                <img className='tech-icon' src={scIcon} alt='styled components icon' />
                <p className='tech-label'>Styled Components</p>
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
            <p>They also allow me to handle the server operations behind the screen which power the content dynamically on the web.</p>
            <p>Hope you get the point. 😉</p>
          </div>
        </section>
        {/* Section Contact */}

        <section className='contact' id='contact'>
          <Parallax className='parallax__mountain' y={[-70, 80]} x={[0, 0]}>
            <img
              src={mountain}
              alt=''
              onLoad={() => {
                this.props.parallaxController.update();
              }}
            />
          </Parallax>
          <Parallax className='parallax__airplane2' y={[200, -300]} x={[-100, 100]}>
            <img src={airplane2} alt='' />
          </Parallax>
          <h1 className='contact__title'>Contact Me</h1>
          <form className='contact-form' name='contact' method='POST' netlify-honeypot='bot-field' data-netlify='true'>
            {/* I found out line below still needed for Netlify to detect form submission. */}
            <input type='hidden' name='form-name' value='contact' />
            <input type='text' id='name' name='name' placeholder='Name' required />
            <input type='email' id='email' name='email' placeholder='Email' required />
            <textarea id='msg' name='msg' rows='10' cols='50' placeholder='Message' required></textarea>
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

export default withController(Home);
