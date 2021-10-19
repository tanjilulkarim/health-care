import React from 'react';
import './Product.css'
import Covid from '../Covid/Covid';
import TopSellingProduct from '../TopSellingProduct/TopSellingProduct';


const Product = () => {
    return (
        <div className="container">
            <h2 className="product-tittle">Our products</h2>
            <TopSellingProduct></TopSellingProduct>
            <Covid></Covid>
        </div>
    );
};

export default Product;