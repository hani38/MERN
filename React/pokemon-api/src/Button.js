import React,{useState} from 'react'


const Button = () => {

    const [pokemon,setPokemon] = useState([]);
    const clickHandler = (e) => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => response.json())
          .then(response => setPokemon(response.results))
          .catch(err=>
                console.log(err)
        )
    }

    return(
        <>
        <button onClick={clickHandler}>fetch Pokemon</button>
        <ul style={{listStylePosition:'inside'}}>
            {pokemon.length > 0 && pokemon.map((item, index)=>{
                return (<li style={{color:'red'}} key={index}>{item.name}</li>)
            })}
        </ul >
        </>
    )


}

export default Button


// import React,{useState} from 'react'


// const Button = () => {

//     const [pokemon, setPokemon] = useState([]);

//     const clickhandler = () =>{

//         fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
//         .then(response => response.json()
//             ).then(response => setPokemon( response.results)
//         ).catch(err=> console.log(err)
//       );
        
//     } 


//     return (

//         <div>
//            <button onCLick={clickhandler}>fetch pokemon </button>
//             {pokemon.length > 0 && pokemon.map((item, index)=>{
//                 return (<div key={index}>{item.name}</div>)
//             })}
        
//         </div>
//     )
// }

// export default Button
