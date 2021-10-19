import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={'https://static.vecteezy.com/system/resources/previews/002/283/586/original/flash-sale-special-offer-banner-liquid-fluid-background-with-purple-and-orange-color-business-product-ads-promotion-template-vector.jpg'} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Winter Flash Sell !!! Winter is Coming!!!</h2>

                    </div>
                </div>
                <div class="carousel-item">
                    <img src={'https://www.gethealthystayhealthy.com/sites/default/files/2019-04/introducing-your-pharmacist.jpg'} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Best quality product</h5>
                        <p>We ensure best Quality product</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={'https://static.vecteezy.com/system/resources/previews/002/839/207/original/medical-capsule-pill-open-with-many-colorful-molecules-on-blue-background-medicine-drug-vitamin-improve-health-concept-red-and-blue-pharmaceutical-antibiotic-halves-structure-with-particles-vector.jpg'} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Free delivery in 1 hour Dhaka city</h5>
                        <p>Inside dhaka city and all over free delivery.. </p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>



    );
};

export default Banner;