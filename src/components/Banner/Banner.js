import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container banner">
            <div className="tittle-text">
                <h2>City care is the most Popular <br /> online pharmacy and healthcare in Bangladesh</h2>
            </div>
            <div className="row ">

                <div className="col-md-6 banner-image">
                    <img height="380px" src={'https://envato-shoebox-0.imgix.net/a53c/4f3d-f475-4fce-96c5-49a17039ded2/IMG_0240.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=b8072a51fcc790731d557683ff595d34'} alt="" />
                </div>
                <div className="col-md-6 banner-tittle">
                    <h2>Flat 20% winter Sale</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <i class="fas fa-shipping-fast"></i>
                            <h4>Free Delivery</h4>
                        </div>
                        <div className="col-md-6">
                            <i class="far fa-money-bill-alt"></i>
                            <h4>Special CashBack </h4>
                        </div>

                    </div>
                    <button type="button" className="btn btn-success">Shop now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;