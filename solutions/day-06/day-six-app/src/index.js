import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



// Function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to get the appropriate color class
const getColorClass = (num) => {
  if (isPrime(num)) return 'prime';
  return num % 2 === 0 ? 'even' : 'odd';
};

// Grid Component
const Grid = () => {
  const numbers = Array.from({ length: 32 }, (_, i) => i);
  // Generates an array with 32 elements where each element is its index

  return (
    <div className="grid-container">
      {numbers.map((num) => (
        <div key={num} className={`grid-item ${getColorClass(num)}`}>
          {num}
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
      <Grid numbers={Array.from({ length: 32 }, (_, i) => i)} />
    </div>
  );
}


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App title="30 Days of React" subtitle="Number Generator" />
  </React.StrictMode>
);


