import React from 'react'
import ReactDOM from 'react-dom/client'



// c) Boolean props type:


const Status = (props) => {
// ternary operator to check the status of the person
let status = props.status ? 'Old enough to drive' : 'Too young for driving'
return <p>{status}</p>
}


 // The app or parent or container component
const App = () => {
let currentYear = 2020
let birthYear = 2015
const age = currentYear - birthYear // 15 years

let status = age >= 18

return (
    <div className='app'>
    <Status status={status} />
    </div>
)
}


const rootElement = document.getElementById('root');

// Use createRoot to initialize the root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
)

