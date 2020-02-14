import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

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
        Sprint Project List 
        <ProjectForm />
      </header>
      <div>
        {projects.map(project => {
          return(
           <ProjectCard 
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
