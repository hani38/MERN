import React from 'react';
import './App.css';
import Newcomponent from './components/Newcomponent';

function App() {
  
  return (

    <div className="App">

    <Newcomponent  firstname={"hani"} lastname={"kiwan"} age={22} haircolor={"black"}/>
    <Newcomponent  firstname={"Qamar"} lastname={"dajani"} age={66} haircolor={"green"}/>

    </div>

    


    
  );
}

export default App;
