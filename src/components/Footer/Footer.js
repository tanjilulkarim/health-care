import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row text-center">
                    <div className="social-icon d-flex justify-content-center mb-4">
                        <i className="fab fa-facebook me-3"></i>
                        <i className="fab fa-instagram-square me-3"></i>
                        <i className="fab fa-twitter-square"></i>
                    </div>
                    <p className="text-white mb-2">citycare. Support. Contact</p>
                    <p className="text-white mb-3">Terms of use. Privacy policy</p>
                    <p>© 2021 City Care is Proudly Powered by <a href="https://www.facebook.com/tanjil.karim.58" target="_blank" rel="noreferrer">Tanjil</a></p>


                </div>
            </div>
        </footer>
    );
};

export default Footer;