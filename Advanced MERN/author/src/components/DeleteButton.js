import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
export default props => {
    const { hani, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/delete/' + hani)
            .then(res=>{
                successCallback();
                
            })
    }
    
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}



