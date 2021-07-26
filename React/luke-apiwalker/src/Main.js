import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = props => {

    const [responseData, setResponseData] = useState([]);

    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/")
            .then(response=>{setResponseData(response.data.results)})
    }, []); 

    return(
        <>
            <button onSubmit={clickhandler}> Hello</button>
             {responseData.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </>
    )
}
export default Main;

