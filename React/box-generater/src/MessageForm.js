import react, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg)
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>color</h1>
            <textarea 
                rows="4"
                cols="50"
                onChange={ (e) => setMsg(e.target.value )}
                value={ msg }
            ></textarea>
            <input type="submit" value="Add" />
        </form>
    );
};
    
export default MessageForm