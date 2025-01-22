import React from 'react'
import ReactDOM from 'react-dom/client'



// a) String props type:


// Header Component
const Header = (props) => {
console.log(props)
return (
    <header>
    <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
        {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
    </div>
    </header>
)
}


 // The app or parent or container component
const App = () => (
<div className='app'>
    <Header
    welcome='Welcome to 30 Days Of React'
    title='Getting Started React'
    subtitle='JavaScript Library'
    firstName='Asabeneh'
    lastName='Yetayeh'
    date='Oct 4, 2020'
    />
</div>
)


const rootElement = document.getElementById('root');

// Use createRoot to initialize the root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
)

