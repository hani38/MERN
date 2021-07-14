import React, { Component } from 'react';

class Newcomponent extends Component{


    constructor (props){
      super(props)
      this.state = {
        age : this.props.age
      }

    }
    render(){


        return(

          <div>
          <h1> My name is {this.props.firstname}  ,  {this.props.lastname} </h1>
          <p> age  : {this.state.age} </p>
          <p> Hair color : {this.props.haircolor} </p>
          <button onClick={ () => { this.setState ({age : this.state.age +1}) } }>Birthday click for  {this.props.firstname}   {this.props.lastname} </button>
          </div>


        );
        
    }
    
}

export default Newcomponent;