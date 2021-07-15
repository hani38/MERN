
import './App.css';
import PersonCard from './PersonCard';

function App() {
  
  return (

    <div className="App">

     <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
     <PersonCard firstName="abiheran" lastName="motaza" age={ 10 } hairColor="Black" /> 
     <PersonCard firstName="hani" lastName="kiwan" age={ 20 } hairColor="White" /> 


    </div>
  );
}

export default App;
