import React from 'react'
import ReactDOM from 'react-dom/client'



// b) Number props type:


const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => (
<p>The weight of the object on earth is {props.weight} N.</p>
)


 // The app or parent or container component
const App = () => {
let currentYear = 2020
let birthYear = 1820
const age = currentYear - birthYear
const gravity = 9.81
const mass = 75

return (
    <div className='app'>
    <Age age={age} />
    <Weight weight={gravity * mass} />
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

