import React from 'react'
import ReactDOM from 'react-dom/client'



// e) Function props type:// The app or parent or container component


// A button component
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
const App = () => {
const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2024')
}

return (
    <div className='app'>
    <Button text='Greet People' onClick={greetPeople} />
    <Button text='Show Time' onClick={() => alert(new Date())} />
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

