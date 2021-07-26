
import axios from 'axios';
import React, { useEffect, useState } from 'react';




const Pokemon = () => {

    const [responseData, setResponseData] = useState([]);
    const clickHandler = () => {

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => { setResponseData(response.data.results) })
    };

    return (

        <>
            <button onClick={clickHandler}>fetch Pokemon</button>
            <div>
                { responseData.map((person, index) => {
                    return (<div key={index}>{person.name}</div>)
                })}
            </div>

        </>
    )

}

export default Pokemon