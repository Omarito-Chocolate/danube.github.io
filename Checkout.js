import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [{ basket }, dispatch]= useStateValue();
  
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_OnSite_Concepts_R3_DesktopStripe_1500x120_v1.png'
        />

        <div>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
        
      {basket.map(item => (
        <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        />
      ))}
        
    
        </div>
      </div>

      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
