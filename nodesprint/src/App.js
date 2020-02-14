import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
            <h2>{project.name}</h2>
          )
        })}
      </div>

    </div>
  );
}

export default App;
