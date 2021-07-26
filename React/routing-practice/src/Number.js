import React from 'react'

const Number = (props) => {
    const {number , color , backgroundColor} = props;
    const style = {
        color : color,
        backgroundColor : backgroundColor
    }

    return (
        <div>
          {isNaN(number) ?  <h1 style = {style}>the word is : {number}</h1>  : <h1 style = {style}>the number is {number} </h1> }
        </div>
    )
}

export default Number
