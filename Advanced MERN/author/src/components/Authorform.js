import React, { useState } from 'react'
import { Link } from '@reach/router';
export default props => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name });
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <Link to={"/"}>
                            HOME
                        </Link> 
            <p>
                <label>Name</label><br />
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
                    
            <input type="submit" />
        </form>
    )
}

