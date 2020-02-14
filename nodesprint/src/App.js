import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProjecCard from './ProjectCard';

function App() {

  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    axios
    .get('http://localhost:5600/api/projects')
    .then( res => {
      console.log(res)
      setProjects(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [setProjects])

  return (
    <div className="App">
      <header className="App-header">
        Welcome
      </header>
      <div>
        {projects.map(project => {
          return(
           <ProjecCard 
            key={project.id}
            name={project.name}
            description={project.description}
            completed={project.completed}
          />
          )
        })}
      </div>

    </div>
  );
}

export default App;
