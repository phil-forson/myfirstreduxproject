import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectedProduct, removeProduct } from '../redux/actions/product-actions';

const ProductDetails = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.selectedProductReducer)
  const {image, title, category, price, description} = product;
  console.log("Please Come", product)
  console.log("Product Id", productId)

  const getProduct = async () => {
    const result = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((error) => {
      console.log(error)
    })
    dispatch(selectedProduct(result.data));
  }

  useEffect(() => {
    if(productId && productId !== ""){
      getProduct();
    }

    return () => {
      dispatch(removeProduct())
    }

  }, [productId]) //whenever the value of the productId changes
  return (
    <div className="ui grid container">
        {Object.keys(product).length ===0  ? (
          <div>Loading Product...</div>
        ) : (
          <div className="ui placeholder segment margin-top-style">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visibele content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default ProductDetails