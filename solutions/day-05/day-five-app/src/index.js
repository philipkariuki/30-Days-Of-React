import React from 'react'
import ReactDOM from 'react-dom/client'



// e) Object props type:


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
// Header Component
const Header = (props) => {
return (
    <header>
    <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
        {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
    </div>
    </header>
)
}

// The app or parent or container component
const App = () => {
const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
    firstName: 'Mzee',
    lastName: 'Msee',
    },
    date: new Date(), // date needs to be formatted to a human readable format
}

return (
    <div className='app'>
    <Header data={data} />
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

