import React from 'react';
import { Link } from 'react-router-dom';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name,price,quantity,seller,key}=props.product;
    
    return (
        <div className='reviewItem'>
            <Link to={`/details/${key}`} className='info-name'><h4>{name}</h4></Link>
            <h5>Price : ${price}</h5>
            <p>Seller: {seller}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>props.removeProduct(key)} className='main_button'>Remove</button>
        </div>
    );
};

export default ReviewItem;