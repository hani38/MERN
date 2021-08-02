import React , {useState , useEffect} from 'react';
import axios from 'axios';

const Formcomponent = () => {
        const [title , setTitle] = useState("");
        const [price , setPrice]  =  useState("");
        const [description , setDescription]  =  useState("");

        
        const onSubmitHandler = e => {

            e.preventDefault();
            axios.post('http://localhost:8000/api/products', {
                title,
                price,
                description
            })
                .then(res=>console.log(res))
                .catch(err=>console.log(err))


                
    }
   


    return (
        <div>
            <h1> Product Manager </h1>

            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <label>Price: </label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)} />
                </div>
                
                <div>
                    <label>Description: </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} />
                </div>
            
                <button type="submit"> Create </button>


            </form>

        </div>
    )
}

export default Formcomponent
