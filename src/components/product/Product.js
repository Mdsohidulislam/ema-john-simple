import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => { 
    const {img,name,seller,price,stock,key}=props.pro;
    const product=props.pro;
    const Click_function=props.handleAddProduct;
    
    return ( 
        <div className='product'>  
            <div className="img">
                <img src={img}/>
            </div>
            <div className="info">
                <Link key={key} to={`/details/${key}`}><h4 className='info-name'>{name}</h4> </Link>
                <p>by: {seller}</p>
                <p>Price: $ {price}</p>
                <p>only {stock} left in stock - order soon</p>
                {props.showAddToCart && <button className='main_button' onClick={()=>Click_function(product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
            </div>
        </div>
    );
};

export default Product;