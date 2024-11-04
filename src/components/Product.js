import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating';


function Product({product}) {
  return (
    <div className='col-md-3 mb-5 card p-3 ' style={{ margin: '0 20px' }}>
      <div >
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <h1>{product.name}</h1>
                <img  src={product.Image} className='img-fluid mb-3'/>
                <h1 className='product-h1 p-2'>{product.description}</h1>
                <Rating
                  style={{color:'orange'}}
                  initialRating={product.ratings}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly={true}
                />
                <h1 className='mb-4 mt-2'>Price : R {product.price}</h1>
            </Link>
                <button class="btn btn-dark my-2 my-sm-0 mb-4" type="submit">ADD TO CART</button>
            </div>
    </div>
  )
}

export default Product
