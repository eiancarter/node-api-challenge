import React from 'react';


export default function ProjectCard (props) {
    return(
        <div style={{background:"grey", width:"300px", display:"flex", flexDirection:"column", margin:"2% auto", boxShadow:"2px 2px 5px black", borderRadius:"6px", color:"white" }}>
            <h2>Project Name:<br></br>{props.name}</h2>
            <h2>Project Description:<br></br>{props.description}</h2>
            <h2>Status: <br></br>{props.completed}</h2>
        </div>
    )
}