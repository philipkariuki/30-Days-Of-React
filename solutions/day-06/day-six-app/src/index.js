import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const countries = [
{ name: 'Finland', city: 'Helsinki' },
{ name: 'Sweden', city: 'Stockholm' },
{ name: 'Denmark', city: 'Copenhagen' },
{ name: 'Norway', city: 'Oslo' },
{ name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
return (
    <div>
    <h1>{name}</h1>
    <small>{city}</small>
    </div>
)
}

// countries component
const Countries = ({ countries }) => {
const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
))
console.log(countryList)
return <div>{countryList}</div>
}
const App = () => (
<div className='container'>
    <div>
    <h1>Countries List</h1>
    <Countries countries={countries} />
    </div>
</div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);







