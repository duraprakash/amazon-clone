import React from 'react';
import "./Product.css";
// 1.1 import image one by one
import LOGO1 from './images/homeback.jpg'
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
  const [{ basket }, dispatch] = useStateValue();

  // this is for testing purpose only
  // console.log('This is the basket >>>> ', basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
 
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
              ))}
          </div>
        </div>

        {/* 1.2 import image one by one */}
        <img src={ image } alt="" />
     
        <button onClick={addToBasket}>Add to Basket</button>

    </div>
  )
}

export default Product; 