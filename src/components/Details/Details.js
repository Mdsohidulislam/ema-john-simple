import React, { useState } from 'react';
import './Details.css' 
import fakeData from '../../fakeData';
import { useParams } from 'react-router-dom';
import Product from '../product/Product';


const Details = () => {
    const productKey=useParams();
    const key=productKey.key; 
    const product=fakeData.find(pd=>pd.key===key);
    // for (const pro in product){
    //     console.log(`${pro} : ${product[pro]}`);
    // }
 
    const {name,category,seller,wholePrice,priceFraction,stock,star,starCount,img,price,shipping,features}=product;
    const [feature,setFeatures]=useState(features);

 
    return (
        <div className='details_div'> 
            <img className='details_img' src={img} alt=""/>
            <hr/>
            <h5><span>Product </span>: {name}</h5>
            <h5><span>Category :</span> {category}</h5>
            <h5><span>Price : $</span>{price}</h5>
            <div>
                {
                        feature.map(pd=><p>{pd.description}: {pd.value}</p>)
                }
            </div>
            <p><span>Seller : </span>{seller}</p>
            <p><span>Stock : </span> {stock}</p>
            <p><span>Shipping : $</span> {shipping}</p>
            <p><span> Whole Price: </span> {wholePrice}</p>
            <p><span>Star : </span> {star}</p>
            <p><span>Star Count : </span> {starCount}</p>
            <p><span>Price Fraction : </span> {priceFraction}</p>  
            {/* <Product showAddToCart={false} pro={product}></Product> */}
        </div> 
    );
};

export default Details;