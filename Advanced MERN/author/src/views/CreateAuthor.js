import { navigate } from '@reach/router'
import React from 'react'
import Authorform from '../components/Authorform';
import axios from 'axios'

const CreateAuthor = () => {
    
   
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res=>{
                navigate("/")
            })
    }
    return (
        <div>
           <Authorform onSubmitProp={createAuthor} initialName="" />
        </div>
    )
}

export default CreateAuthor
