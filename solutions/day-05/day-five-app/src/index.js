import React from 'react'
import ReactDOM from 'react-dom/client'



// d) Array props type:


const Skills = (props) => {
// modifying the skills array
const skillList = props.skills.map((skill) => <li>{skill}</li>)
return <ul>{skillList}</ul>
}

const App = () => (
<div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
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

