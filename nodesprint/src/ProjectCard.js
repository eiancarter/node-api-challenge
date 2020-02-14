import React from 'react';


export default function ProjecCard (props) {
    return(
        <div>
            <h2>Project Name:{props.name}</h2>
            <h2>Project Description:{props.description}</h2>
            <h2>Status: {props.completed}</h2>
        </div>
    )
}