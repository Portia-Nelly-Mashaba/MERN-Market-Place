import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
const products = []

  const { id: productid } = useParams();
  
  const product = products.find(product => product.id == productid)
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 p-2">
          <div className="card">
            <h1 className="mt-3">{product.name}</h1>
            <img src={product.image} className="img-fluid m-3 big-img" alt={product.name} />
            <p>{product.description}</p>
          </div>
        </div>

        <div className="col-md-6 text-start">
          <div className="m-2">
            <h1 className='product-h1'>Price: R{product.price}</h1>
            <hr />
            <h1 className='product-h1'>Select Quantity</h1>

            <select>
                {[...Array(product.countInStock).keys()].map((x, i) =>{
                    return <option value={i+1}>{i+1}</option>
                })}
            </select>
            <hr />
            <button className="btn btn-dark my-2 my-sm-0 text-end" type="submit">ADD TO CART</button>

          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetails;

