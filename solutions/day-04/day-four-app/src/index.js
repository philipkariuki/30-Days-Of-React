import React from 'react'
import ReactDOM from 'react-dom/client'
import dogoPicha from './images/dogo.jpg'
import cssPicha from './images/css.jpg'
import htmlPicha from './images/html.jpg'
import jsPicha from './images/js.jpg'
import rctPicha from './images/logors.png'



// JSX element, header
const title = 'Front End Technologies'


const Czz = () => (
  <div className='czz-card'>
    <img src={cssPicha} alt='czz' />
  </div>
)

const Htmls = () => (
  <div className='html-card'>
    <img src={htmlPicha} alt='htmls' />
  </div>
)

const Js = () => (
  <div className='js-card'>
    <img src={jsPicha} alt='js' />
  </div>
)

const Ract = () => (
  <div className='ract-card'>
    <img src={rctPicha} alt='react' />
  </div>
)


const Header = () => (
  <header>
    <div className='header-wrapper'>
      <div className='title-container'>
        <h4>{title}</h4>
      </div>
      <Htmls />
      <Czz />
      <Js />
      <Ract />
    </div>   
  </header>
)




// User card component

const UserCard = () => (
  <div>
    <img src={dogoPicha} alt='dogo' />
  </div>
)


// Main Component



const Main = () => (
  <main>
    <div className='main-wrapper'>
      <div className='main-container'>
        <p><UserCard /></p>
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

// Hexadecimal color generator component
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
const ColorRows = () => {
  const rows = Array.from({ length: 4 }, () => generateRandomColor())
  return (
    <div className="color-container">
      {rows.map((color, index) => (
        <div
          key={index}
          className="color-row"
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
      ))}
    </div>
  )
}

// Footer Component

const subscribe = 'Subscribe'
const message = 'Sign up with your email address to receive news and updates'

const SignupForm = () => (
  <form className='signup-form'>
    <input type='text' placeholder='First Name' name='firstname' required/>
    <input type='text' placeholder='Last Name' name='lastname' required />
    <input type='email' placeholder='Email' name='email' required />
  </form>
)

const Footer = () => (
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


// The app or parent or container component
const App = () => (
  <div className='app'>
    <Header /> {/* Render Header as a component */}
    <Main /> {/* Render Main as a component */}
    <generateRandomColor />
    <ColorRows />
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
