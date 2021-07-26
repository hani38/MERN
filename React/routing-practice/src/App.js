import { Router } from '@reach/router';
import './App.css';
import List from './List';
import Number from './Number';

function App() {
  return (
    <div className="App">
      <Router>
      <List path = "/home" />
      <Number path = "/:number" />
      <Number path = "/:number/:color/:backgroundColor" />
      </Router>
      
    </div>
  );
}

export default App;
