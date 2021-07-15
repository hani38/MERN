import React, { useState } from 'react'

const UserForm = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname,email, password ,confirmpassword};
        console.log("Welcome", newUser);

        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirmpassword("")
    };

    const validationfirstname = (e)  =>{
        
        if (firstname.length < 2)
        return "it should be more than 2 ";
    }
    const validationlastname = (e)  =>{
        if (lastname.length < 2)
        return "it should be more than 2 ";
    }
    const validationemail = (e)  =>{
        
        if (email.length < 5)
        return "it should be more than 5 ";
    }
    const validationpassword = (e)  =>{
        
        if (password.length < 8)
        return "it should be more than 8 ";
    }
    const validationpasscon = (e)  =>{
        
        if (confirmpassword.length < 8)
        return "it should be more than 8 ";
    }




    return (
        <div>

            <form onSubmit={createUser}>
                <div>
                    <label>FirstName: </label>
                    <input type="text" onChange=  { (e) => setFirstname(e.target.value)} />
                    <p> {validationfirstname()}</p>
                   
                </div>

                <div>
                    <label>LastName: </label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value)} />
                    <p> {validationlastname()}</p>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)} />
                    <p> {validationemail()}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value)} />
                    <p> {validationpassword()}</p>
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmpassword(e.target.value)} />
                    <p> {validationpasscon()}</p>
                </div>
                <input type="submit" value="Create User" />
            </form>

            <p>my info</p>
                {firstname}<br></br>
                {lastname}<br></br>
                {email}<br></br>
                {password}<br></br>
                {confirmpassword}<br></br>

        </div>
    )
}

export default UserForm
