import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Numbers = ({ numbers }) => {
// modifying array to array of li JSX
const list = numbers.map((num) => <li key={num}>{num}</li>)
return list
}

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







