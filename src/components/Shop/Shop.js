import React from 'react';
import fakeData from '../../fakeData'; 
import {useState} from 'react'
import './Shop.css';
import Product from '../product/Product'
import Cart from '../cart/Cart'

const Shop = () => { 
    const first10=fakeData.slice(0,10) 
    const [data, setData] = useState(first10); 
    const [cart,setCart]=useState([])
    const handleAddProduct=(product)=>{ 
        const newCart=[...cart,product]; 
        setCart(newCart); 
        const totalPrice=cart.reduce((total,prod)=>total+prod.price,0)
        console.log(totalPrice);
    
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    data.map(pro=><Product handleAddProduct={handleAddProduct} pro={pro}></Product>)
                }
            </div>
            <div className="cart-container"> 
                <Cart cart={cart}></Cart>; 
            </div>
        </div>
    );
};

export default Shop;