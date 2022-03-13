/* eslint-disable no-unused-vars */
import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, image, title, price, rating }) {

const [{ basket }, dispatch] = useStateValue();

const removeFromBasket = () => {
     dispatch ({
     type: 'REMOVE FROM BASKET',
     id: id,
    })
}

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt='' />
        
       <div className="checkoutProduct_info">
           <p className="CheckoutProduct_title">{title}</p>
           <p className="checkoutProduct_price">
               <small>$</small>
               <strong>{price}</strong>
               </p>
               <div className="checkoutProduct_rating">
                   {Array(rating)
                   .fill()
                   .map((_, i) => (
                       <p>str</p>
                   
                       ))}
               <button onClick={removeFromBasket}>Remove from Basket</button>
               </div>
            
       </div>
        </div>
    
    )
}

export default CheckoutProduct
