import './App.css';
import Formcomponent from  './Formcomponent';

import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Details from './Details';
import { Router } from '@reach/router';



function App() {

  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/products')
          .then(res=>{
            setProduct(res.data);
              setLoaded(true);
          });
  },[])


  return (
    
    <div className="App">
      <Router>
     { loaded && <Formcomponent  product={product} path="products" />}
          

          <Details path="products/:id"/>
          </Router>
    </div>
  );
}

export default App;





