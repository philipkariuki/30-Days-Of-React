import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
['HTML', 10],
['CSS', 7],
['JavaScript', 9],
['React', 8],
]

// Skill Component
const Skill = ({ skill: [tech, level] }) => (
<li>
    {tech} {level}
</li>
)

// Skills Component
const Skills = ({ skills }) => {
const skillsList = skills.map((skill) => <Skill skill={skill} />)
console.log(skillsList)
return <ul>{skillsList}</ul>
}

const App = () => {
return (
    <div className='container'>
    <div>
        <h1>Skills Level</h1>
        <Skills skills={skills} />
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







