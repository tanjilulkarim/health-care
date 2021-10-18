import React from 'react';
import "./Contact.css";
const Contact = () => {
    return (
        <div className="container contact-container">
            <div className="tittle">
                <h1 className=" mb-3">How Can We Help?</h1>
                <p className=" mb-5">Talk to one of our consultants today and learn how to start leveraging your Study...</p>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card text-center p-5 contact-card" >
                        <div className="card-icon  px-5 pt-3 pb-1">
                            <i className="fas fa-phone icon"></i>
                        </div>
                        <div className="p-4">
                            <h4 className="card-title mb-3">+1 123 98765 4321</h4>

                            <h6 className="">We answer by phone from Monday to Saturday from 10 am until 6 pm.</h6>

                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card text-center contact-card p-5" >
                        <div className="card-icon  px-5 pt-3 pb-1">
                            <i className="far fa-envelope icon"></i>
                        </div>
                        <div className="p-4">
                            <h4 className="card-title mb-3">Cinfo@.com</h4>

                            <h6 className="">We will respond to your email within 8 hours bussiness on days.</h6>

                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card text-center contact-card p-5" >
                        <div className="card-icon  px-5 pt-3 pb-1">
                            <i className="fas fa-map-marker-alt icon"></i>
                        </div>
                        <div className="p-4">
                            <h4 className="card-title mb-3">Office Street, 77</h4>

                            <h6 className="">Come visit us from Monday to Friday from 11 am to 4 pm. we can ensure your security</h6>

                        </div>
                    </div>
                </div>

                {/* end */}
            </div>
        </div>
    );
};

export default Contact;