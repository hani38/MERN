import React, { useState } from 'react';
    
    
const MessageDisplay = (props) => {

    return (
        <div>
            <>
            <h1>Box Creator:</h1>
            <div>{props.message.map((item, index)=>{
            let bucks ={background:item, height:"250px", width:"250px"};
            return <div key={index}  style={bucks}>box</div>
        })}</div>
        </>
        </div>
    )
}
export default MessageDisplay;