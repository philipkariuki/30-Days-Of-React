//index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom'

const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Mzee Msee</p>
    <small>Nov 29, 2024</small>
  </header>
)
const rootElement = document.getElementById('root')

ReactDOM.render(header, rootElement)


// Using updated method which is supposed to improve performance
/* import React from 'react';
import ReactDOM from 'react-dom/client';

const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Mzee Msee</p>
    <small>Nov 29, 2024</small>
  </header>
)
const rootElement = document.getElementById('root');

// Use createRoot to initialize the root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {header}
  </React.StrictMode>
);
 */