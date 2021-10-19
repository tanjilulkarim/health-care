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
                        <h1 className="mb-0">Winter Flash Sell !!! Winter is Coming!!!</h1>

                    </div>
                </div>
                <div class="carousel-item">
                    <img src={'https://www.scnsoft.com/_default_upload_bucket/healthcare-customer-service.png'} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h2 className="text-success">Best Castomer Services</h2>
                        <h4 className="text-success">"Ensure more less than price in market and ensure castomer satisfaction"</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={'https://unb.com.bd/filemanager/photos/64/OshudhWala.png'} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h2 className="bg-secondary">1 hour Delivery in Dhaka city</h2>

                        <img height="100px" src={'https://as2.ftcdn.net/v2/jpg/01/99/13/11/500_F_199131179_Rw8FONd62AufRRtLmmgYJ8l4n0Kiby1t.jpg'} alt="" />
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