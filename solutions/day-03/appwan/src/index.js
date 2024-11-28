//index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom'

const jsxElement = <h1>This is a JSX element</h1>
const rootElement = document.getElementById('root')

ReactDOM.render(jsxElement, rootElement)


// Using updated method which is supposed to improve performance
/* import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxElement = <h1>This is a JSX element</h1>;
const rootElement = document.getElementById('root');

// Use createRoot to initialize the root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {jsxElement}
  </React.StrictMode>
);
 */