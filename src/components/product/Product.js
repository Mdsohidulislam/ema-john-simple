import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => { 
    return ( 
        <div className='product'>  
            <div className="img">
                <img src={props.pro.img}/>
            </div>
            <div className="info">
                <h4 className='info-name'>{props.pro.name}</h4> 
                <p>by: {props.pro.seller}</p>
                <p>Price: ${props.pro.price}</p>
                <p>only {props.pro.stock} left in stock - order soon</p>
                <button onClick={()=>props.handleAddProduct(props.pro)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;