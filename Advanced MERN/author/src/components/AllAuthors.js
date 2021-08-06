
import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
export default props => {
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthor(res.data));
    }, [])
    const removeFromDom = hani => {
        setAuthor(author.filter(author => author._id != hani))
    }
    return (
        <div>
            {author.map((author, idx) => {
                return (
                    <p key={idx}>
                        
                            {author.name}, 
                        |
                        <Link to={"/" + author._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                       <DeleteButton hani={author._id} successCallback={()=>removeFromDom(author._id)}/>
                    </p>
                )
            })}
        </div>
    )
}

