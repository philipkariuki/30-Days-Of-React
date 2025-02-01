import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



// Function to generate a random hexadecimal color
const getRandomHexColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


// Grid Component
const Grid = () => {
  const colors = Array.from({ length: 32 }, () => getRandomHexColor());

  return (
    <div className="grid-container">
      {colors.map((color, index) => (
        <div key={index} className="grid-item" style={{ backgroundColor: color }}>
          {color}
        </div>
      ))}
    </div>
  );
};

// Main App Component
const App = ({ title, subtitle }) => {
  return (
    <div className="app">
      <h1 className="heading">{title}</h1>
      <h2 className="subheading">{subtitle}</h2>
      <Grid />
    </div>
  );
}


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App title="30 Days of React" subtitle="Hexadecimal Colors" />
  </React.StrictMode>
);


