import React from 'react'
import ReactDOM from 'react-dom/client'
// import logoNdogo from './images/logors.png'



// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Mzee',
  lastName: 'Msee',
}
const date = 'Nov 29, 2024'


// const header = (
//   <header>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>
//         Instructor: {author.firstName} {author.lastName}
//       </p>
//       <small>Date: {date}</small>
//     </div>    
//   </header>
// )

// // React Component
// const Header = () => {
//   return header
// }

// Explicitly returning the JSX
const Header = () => (
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

// const Header = () => {
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>Welcome to 30 Days Of React</h1>
//         <h2>Getting Started React</h2>
//         <h3>JavaScript Library</h3>
//         <p>Asabeneh Yetayeh</p>
//         <small>Oct 3, 2020</small>
//       </div>
//     </header>
//   )
// }



/* 
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

const ogo = (
  <div>
    <img src={logoNdogo} alt='dogo' />
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
      {ogo}
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
) */

// JSX element, app, a container or a parent
const app = (
  <div className='app'>
    <Header /> {/* Render Header as a component */}
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
