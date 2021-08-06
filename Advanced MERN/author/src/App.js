import './App.css';
import React from 'react'
import Main from './views/Main';
import {Router} from '@reach/router'
import Update from './views/Update';
import CreateAuthor from './views/CreateAuthor';


function App() {

  return (
    <div className="App">
      <h1> Favorite Author</h1>
      
      <Router>
      <CreateAuthor path="/new" />
      <Main path="/" />
      <Update path="/:id/edit"/>
      </Router>
        
    </div>
  );
}

export default App;




