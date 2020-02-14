import React from 'react';


const ProjectForm = () => {
    return(
        <form style={{display:"flex", flexDirection:"column", marginTop:"60px", width:"200px"}}>
            <input 
                type='text'
                placeholder='name'
            />
            <input
                type='text-field'
                placeholder='description'
            />
            <button>Submit</button>
        </form>
    )
}

export default ProjectForm;