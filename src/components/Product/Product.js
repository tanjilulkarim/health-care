import React from 'react';
import Covid from '../Covid/Covid';
import TopSellingProduct from '../TopSellingProduct/TopSellingProduct';


const Product = () => {
    return (
        <div className="container">
            <h2>Our availabe product</h2>
            <TopSellingProduct></TopSellingProduct>
            <Covid></Covid>
        </div>
    );
};

export default Product;