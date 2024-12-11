import React from 'react'
import ReactDOM from 'react-dom/client'
import dogoPicha from './images/dogo.jpg'



// JSX element, header
// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//   firstName: 'Mzee',
//   lastName: 'Msee',
// }
// const date = 'Nov 29, 2024'


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

// Header component
// const Header = () => (
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

// Header component
const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Mzee Msee</p>
        <small>Nov 29, 2024</small>
      </div>
    </header>
  )
}

// User card component
const UserCard = () => (
  <div className='user-card'>
    <img src={dogoPicha} alt='dogo' />
    <h4>Cool Dog</h4>
  </div>
)


// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}


// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
    </div>
  </main>
)


// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2024</p>
    </div>
  </footer>
)


// The app or parent or container component
const App = () => (
  <div className='app'>
    <Header /> {/* Render Header as a component */}
    <Main /> {/* Render Main as a component */}
    <Footer /> {/* Render Footer as a component */}
  </div>
)


const rootElement = document.getElementById('root');

// Use createRoot to initialize the root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
)



/* 
const yearBorn = 1904
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {author.firstName} {author.lastName} is {age} years old
  </p>
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


