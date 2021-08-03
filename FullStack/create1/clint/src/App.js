import './App.css';
import Formcomponent from  './Formcomponent';
import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Details from './Details';
import Update from './Update';
import { Router } from '@reach/router';
import ProductList from './ProductList';



function App() {

  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/products')
          .then(res=>{
            console.log("i am in the axsios")
            setProduct(res.data);
              setLoaded(true);
          });
  },[])


    const removeFromDom = productId => {
      setProduct(product.filter(product => product._id != productId));
  }


  return (
    
    <div className="App">
      <Router>
     { loaded && <Formcomponent  product={product} path="products" />}
          <Details path="products/:id"/>
          <Update path="products/:id/edit"/>
          {loaded && <ProductList product={product} removeFromDom={removeFromDom}  path="products/:id/delete" />}
          </Router>

        
    </div>
  );
}

export default App;





