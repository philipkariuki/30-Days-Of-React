import React from 'react'
import ReactDOM from 'react-dom/client'



// e) Function props type:


// Function to display time in Mon date, year format eg Oct 4, 2020
const showDate = (time) => {
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const month = months[time.getMonth()].slice(0, 3)
const year = time.getFullYear()
const date = time.getDate()
return ` ${month} ${date}, ${year}`
}

// Button component
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The app or parent or container component
const App = () => {
const handleTime = () => {
    alert(showDate(new Date()))
}
const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2024')
}
return (
    <div className='app'>
    <Button text='show time' onClick={handleTime} />
    <Button text='Greet People' onClick={greetPeople} />
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

