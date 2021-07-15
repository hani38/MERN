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


    return (
        <div>

            <form onSubmit={createUser}>
                <div>
                    <label>FirstName: </label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                </div>

                <div>
                    <label>LastName: </label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmpassword(e.target.value)} />
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
