import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Numbers = ({ numbers }) => {
// modifying array to array of li JSX
const list = numbers.map((number) => <li>{number}</li>)
return list
}

// App component
const App = () => {
const numbers = [1, 2, 3, 4, 5]

return (
  <div className='container'>
  <div>
      <h1>Numbers List</h1>
      <ul>
      <Numbers numbers={numbers} />
      </ul>
  </div>
  </div>
)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);







