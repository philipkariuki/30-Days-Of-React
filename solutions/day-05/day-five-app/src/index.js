import React from 'react';
import ReactDOM from 'react-dom/client';
import dogoPicha from './images/dogo.jpg';
import cssPicha from './images/css.jpg';
import htmlPicha from './images/html.jpg';
import jsPicha from './images/js.jpg';
import rctPicha from './images/logors.png';

// JSX element, header
const title = 'Front End Technologies';

const Czz = ({ imgSrc }) => (
  <div className='czz-card'>
    <img src={imgSrc} alt='czz' />
  </div>
);

const Htmls = ({ imgSrc }) => (
  <div className='html-card'>
    <img src={imgSrc} alt='htmls' />
  </div>
);

const Js = ({ imgSrc }) => (
  <div className='js-card'>
    <img src={imgSrc} alt='js' />
  </div>
);

const Ract = ({ imgSrc }) => (
  <div className='ract-card'>
    <img src={imgSrc} alt='react' />
  </div>
);

const Header = ({ title }) => (
  <header>
    <div className='header-wrapper'>
      <div className='title-container'>
        <h4>{title}</h4>
      </div>
      <Htmls imgSrc={htmlPicha} />
      <Czz imgSrc={cssPicha} />
      <Js imgSrc={jsPicha} />
      <Ract imgSrc={rctPicha} />
    </div>   
  </header>
);

// User card component

const UserCard = ({ imgSrc }) => (
  <div>
    <img src={imgSrc} alt='dogo' />
  </div>
);

// Main Component

const Main = ({ userImgSrc, userName, userRole, skills, joinDate }) => (
  <main>
    <div className='main-wrapper'>
      <div className='main-container'>
        <p><UserCard imgSrc={userImgSrc} /></p>
        <p>{userName} <i className="fas fa-check-circle"></i></p>
        <small>{userRole}</small>
        <p><b>Skills</b></p>
        <div className='skills-container'>
          <p>{skills.map(skill => <span key={skill}>{skill}</span>)}</p>
        </div>
        <small><i className="fas fa-light fa-clock"></i> Joined on {joinDate}</small>
      </div>  
    </div>
  </main>
);

// Hexadecimal color generator component
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const ColorRows = () => {
  const rows = Array.from({ length: 4 }, () => generateRandomColor());
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
  );
}

// Footer Component

const SignupForm = ({ onSubmit }) => (
  <form className='signup-form' onSubmit={onSubmit}>
    <input type='text' placeholder='First Name' name='firstname' required/>
    <input type='text' placeholder='Last Name' name='lastname' required />
    <input type='email' placeholder='Email' name='email' required />
    <div className='button-wrapper'>
      <button type='submit'>Subscribe</button>
    </div>    
  </form>
);

const Footer = ({ subscribe, message, onSubmit }) => (
  <footer>
    <div className='footer-wrapper'>
      <div className='title-container'>
        <h1 id='supscribe'>{subscribe}</h1>
        <p>{message}</p>
        <SignupForm onSubmit={onSubmit} />
      </div>    
    </div>    
  </footer>
);

// The app or parent or container component
const App = () => {
  const skills = [
    'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 
    'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 
    'MYSQL', 'PostgreSQL', 'Docker', 'Heroku', 'Git', 'Django', 'NumPy', 'Pandas', 'MYSQL', 'PostgreSQL', 'Docker', 'Heroku', 'Git', 'Django', 'NumPy', 'Pandas', 'MYSQL'
  ];

  return (
    <div className='app'>
      <Header title={title} /> {/* Render Header as a component */}
      <Main 
        userImgSrc={dogoPicha} 
        userName="MZEE MSEE" 
        userRole="Front End Developer" 
        skills={skills}
        joinDate="Dec 2, 2024"
      /> {/* Render Main as a component */}
      <ColorRows />
      <Footer 
        subscribe="Subscribe" 
        message="Sign up with your email address to receive news and updates"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Form submitted');
        }}
      /> {/* Render Footer as a component */}
    </div>
  );
}

const rootElement = document.getElementById('root');

// Use createRoot to initialize the root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
