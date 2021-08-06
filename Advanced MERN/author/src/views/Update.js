import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import Authorform from '../components/Authorform';
import DeleteButton from '../components/DeleteButton';
export default props => {
    const { id } = props;
    const [item, setItem] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setItem(res.data);
                setLoaded(true);
            })
    }, [])

    const updateauthor = item => {
        axios.put('http://localhost:8000/api/authors/update/' + id, item)
            .then(res => {
                navigate("/")
            })
    }
    return (
        
           <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <Authorform onSubmitProp={updateauthor} initialName={item.name} />
                    <DeleteButton hani={item._id} successCallback={()=>navigate("/")}/>
                </>
            )}
        </div>
        
    )
}
