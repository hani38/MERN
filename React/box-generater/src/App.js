
import './App.css';
import React, {useState} from 'react';
import MessageDisplay from './MessageDisplay';
import MessageForm from './MessageForm';


function App() {

  const [currentMsg, setCurrentMsg] = useState([]);
  
    const youveGotMail = ( newMessage ) => {
        setCurrentMsg( currentMsg.concat(newMessage) );
    }
  
  return (
      <>
          <MessageForm onNewMessage={ youveGotMail } />
          <MessageDisplay message={ currentMsg } />
        </>
  );
}
  

export default App;
