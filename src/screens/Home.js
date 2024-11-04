import React from 'react'
import products from './Products'
import Product from '../components/Product'

const Home = () => {
  return (
    <div className='content-center'>
      <div className='row justify-content-center mt-4 g-4'>
        {products.map(product=>{
            return  <Product product = {product} />
        })}
      </div>
    </div>
  )
}

export default Home
