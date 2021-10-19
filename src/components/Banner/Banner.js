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
                        <h5>Winter Flash Sell</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={'https://www.sharmanjiyarns.com/images/quality_banner.jpg'} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Best quality product</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={'https://envato-shoebox-0.imgix.net/9dda/037e-c920-4494-8eb9-506317d056d0/202003094531.JPG?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=e338849928078e0c20b72a470f4cd3f9'} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
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




















        // <div className="container banner">
        //     <div className="tittle-text">
        //         <h2>City care is the most Popular <br /> online pharmacy and healthcare in Bangladesh</h2>
        //     </div>
        //     <div className="row ">

        //         <div className="col-md-6 banner-image">
        //             <img height="380px" src={'https://envato-shoebox-0.imgix.net/a53c/4f3d-f475-4fce-96c5-49a17039ded2/IMG_0240.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=b8072a51fcc790731d557683ff595d34'} alt="" />
        //         </div>
        //         <div className="col-md-6 banner-tittle">
        //             <h2>Flat 20% winter Sale</h2>
        //             <div className="row">
        //                 <div className="col-md-6">
        //                     <i class="fas fa-shipping-fast"></i>
        //                     <h4>Free Delivery</h4>
        //                 </div>
        //                 <div className="col-md-6">
        //                     <i class="far fa-money-bill-alt"></i>
        //                     <h4>Special CashBack </h4>
        //                 </div>

        //             </div>
        //             <button type="button" className="btn btn-success">Shop now</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;