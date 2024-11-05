import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/productActions';
import { getAllProductsReducer } from '../redux/reducers/productReducer';

const Home = () => {
  const getAllProductsState = useSelector((state) => state.getAllProductsReducer);
  const { loading, products, error } = getAllProductsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className='content-center'>
      <div className='row justify-content-center mt-4 g-4'>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong...</h1>
        ) : (
          products.map((product) => (
            <div className='col-md-3 mb-5 card p-3' style={{ margin: '0 20px' }} key={product._id}>
              <Product product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;

// useEffect(() => {
//   axios.get('http://localhost:5000/getproducts').then(result => {
//     console.log(result)
//     setProducts(result.data);
//   })
//     .catch(err => console.log(err));

//   dispatch(getAllProducts());
// }, []);
