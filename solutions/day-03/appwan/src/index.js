//index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom'
import cssPicha from './images/css.jpg'
import htmlPicha from './images/html.jpg'
import jsPicha from './images/js.jpg'
import dogoPicha from './images/dogo.jpg'



// JSX element, header
const title = 'Front End Technologies'

const css = (
  <div>
    <img src={cssPicha} alt='css' />
  </div>
)

const html = (
  <div>
    <img src={htmlPicha} alt='html' />
  </div>
)

const js = (
  <div>
    <img src={jsPicha} alt='js' />
  </div>
)


const header = (
  <header>
    <div className='header-wrapper'>
      <div className='title-container'>
        <h4>{title}</h4>
      </div>
      {html}
      {css}
      {js}
      {html}
    </div>   
  </header>
)

// JSX element, main

const user = (
  <div>
    <img src={dogoPicha} alt='dogo' />
  </div>
)


const main = (
  <main>
    <div className='main-wrapper'>
      <div className='main-container'>
        <p>{user}</p>
        <p>MZEE MSEE <i className="fas fa-check-circle"></i></p>
        <small>Front End Developer</small>
        <p><b>Skills</b></p>
        <div className='skills-container'>
          <p>
            <span>HTML</span><span>CSS</span><span>Sass</span><span>JS</span><span>React</span><span>Redux</span><span>Node</span><span>MongoDB</span><span>Python</span><span>Flask</span><span>Django</span><span>NumPy</span><span>Pandas</span><span>Data Analysis</span><span>MYSQL</span><span>PostgreSQL</span><span>Docker</span><span>Heroku</span><span>Git</span><span>Django</span><span>NumPy</span><span>Pandas</span><span>MYSQL</span><span>PostgreSQL</span><span>Docker</span><span>Heroku</span><span>Git</span><span>Django</span><span>NumPy</span><span>Pandas</span><span>MYSQL</span>
          </p>
        </div>
        <small><i className="fas fa-light fa-clock"></i> Joined on Dec 2, 2024</small>
      </div>  
    </div>
  </main>
)

// JSX element, footer
const subscribe = 'Subscribe'
const message = 'Sign up with your email address to receive news and updates'

const SignupForm = () => (
  <form className='signup-form'>
    <input type='text' placeholder='First Name' name='firstname' required/>
    <input type='text' placeholder='Last Name' name='lastname' required />
    <input type='email' placeholder='Email' name='email' required />
  </form>
)

const footer = (
  <footer>
    <div className='footer-wrapper'>
      <div className='title-container'>
        <h1 id='supscribe'>{subscribe}</h1>
        <p>{message}</p>
        <SignupForm />
        <button type='submit'>Subscribe</button>
      </div>    
    </div>    
  </footer>
)

// JSX element, app, a container or a parent
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)


const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)


// Using updated method which is supposed to improve performance
/* import React from 'react'
import ReactDOM from 'react-dom/client'
import dogoPicha from './images/dogo.jpg'



// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Mzee',
  lastName: 'Msee',
}
const date = 'Nov 29, 2024'


const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>    
  </header>
)

const yearBorn = 1904
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div>
    <img src={dogoPicha} alt='dogo' />
  </div>
)

const main = (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        {techsFormatted}
      </ul>
      {personAge}
      {user}
    </div>    
  </main>
)

// JSX element, footer
const copyRight = 'Copyright 2024'

const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
    
  </footer>
)

// JSX element, app, a container or a parent
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)


const rootElement = document.getElementById('root');

// Use createRoot to initialize the root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
);
 */