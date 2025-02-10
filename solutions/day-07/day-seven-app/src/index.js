import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

// Header Component
// Class based component
class Header extends React.Component {
  render() {
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
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);







