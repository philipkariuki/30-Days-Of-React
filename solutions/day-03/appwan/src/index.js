//index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom'
import dogoPicha from './images/dogo.jpg'
import { changeHeaderColor } from './util' // Import the changeHeaderColor 



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
      <h1 id='welcome-title'>{welcome}</h1> {/* Add id to the element */}
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

const handleChangeColor = () => { changeHeaderColor('welcome-title')  
}

const main = (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        {techsFormatted}
      </ul>
      {personAge}
      {user}
      <button onClick={handleChangeColor}>Change Header Color</button> {/* Add the button */} 
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