import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'



const Review = () => {
    const [cart,setCart]=useState([]);

    const removeProduct=(productKey)=>{ 
        const newCart=cart.filter(pd=>pd.key !== productKey);
        setCart(newCart)
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        const savedCart=getDatabaseCart(); 
        const productKey=Object.keys(savedCart) 
        const cartProduct=productKey.map(key=>{
            const product=fakeData.find(pd=>pd.key===key)
            product.quantity=savedCart[key];
            return product;
        })
        setCart(cartProduct)
    },[])

    const [orderPlaced,setOrderPlaced]=useState(false)
    const handlePlaceOrder=()=>{
        setCart([])
        setOrderPlaced(true)
        processOrder()
        console.log('order-placed');
    }

    let thankYouImg;
    if(orderPlaced){
        thankYouImg=<img src={happyImage} alt=""/>
    }
    return (
        <div className='twin-container'>
            <div className='product-container'>
            <h4>Review Item : {cart.length}</h4> 
            {
                cart.map(pd=><ReviewItem product={pd} removeProduct={removeProduct} key={pd.key}></ReviewItem>)
            }
            {
                thankYouImg
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='main_button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;