import axios from 'axios';

export const getAllProducts = () => (dispatch) => {
    dispatch({ type: 'GET_PRODUCTS_REQUEST' });

    axios
        .get('http://localhost:5000/getproducts')
        .then((result) => {
            console.log(result);
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: result.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'GET_PRODUCTS_FAILED', payload: err });
        });
};