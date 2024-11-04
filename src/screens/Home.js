import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'

const Home = () => {
  const [products, setProducts] =useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000/getproducts').then(result => {console.log(result)
      setProducts(result.data);
    })
    .catch(err => console.log(err));
}, []);

  return (
    <div className='content-center'>
      <div className='row justify-content-center mt-4 g-4'>
        {products.length && (products.map(product => {
          
        }))}
      </div>
    </div>
  )
}

export default Home
