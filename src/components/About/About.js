import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container">
            <div className="row py-5 my-5">
                <img src={'https://www.freepngimg.com/download/welcome/26832-4-welcome-hd.png'} alt="" />
                <h1 className="text-center  mb-5 about-tittle "> City Care online pharmacy and healthcare</h1>
                <div className="col-lg-6">
                    <h3>About Us</h3>
                    <img height="457px" width="100%" src={'https://images.theconversation.com/files/296159/original/file-20191009-3867-dvwfmu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop'} alt="" />
                    <h5>City Care online pharmacy and healthcare is one the most pupular pharmacy in Bangladesh</h5>
                    <p>Pharmacists provide optimal management of medication for chronic diseases such as diabetes, asthma, hypertension, etc. The collaboration of healthcare professionals, such as physicians and pharmacists, can help to ensure that patients properly take their medications as prescribed and avoid any harmful effects.</p>
                    <br />
                    <p></p>
                </div>
                <div className="col-lg-6">
                    <h3>Our Vision</h3>
                    <img height="457px" width="100%" src={'https://www.leadershipjournal.de/wp-content/uploads/2018/05/Vision-Mission-und-Werte-LeadershipJournal.jpg'} alt="" />
                    <p><blockquote>
                        "We can always try to fast delivery and quality product"

                    </blockquote></p>
                    <p><blockquote>
                        "Free delivery in Dhaka city and 1 hour garranted delivery"

                    </blockquote></p>
                    <p><blockquote>
                        "Ensure more less than price in market and ensure castomer satisfaction"

                    </blockquote></p>


                </div>
            </div>

            <div className="container-ceo">
                <div className="row">
                    <h2 className="tittle-text">Our honorable CEO</h2>
                    <div className="col-md-6 ">
                        <img src={'https://media-exp1.licdn.com/dms/image/C5103AQFqx7Wf9O-atA/profile-displayphoto-shrink_200_200/0/1565948545370?e=1639008000&v=beta&t=Lr-2HoyKrTCkk2ukNi9mvfXYa5JNVEW6IYukjWIj9A0'} alt="" />
                        <br />
                        <br />
                        <h5>Tanjilul karim</h5>
                        <br />

                    </div>
                    <div className="col-md-6 img-ceo">
                        <img height="150px" src={'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/163232144/original/3d509828e3481cf3a1c38c82fb807c3aa55af7df/create-speech-bubble-qutation-posters-and-add-speech-bubble-on-your-photos.png'} alt="" />
                        <h5><blockquote>
                            ""Honesth is the best business policy. We work with honetly.We ensure good product and offer value for""
                        </blockquote></h5>
                    </div>
                    <br />
                    <br />
                    <hr />
                </div>


            </div>


        </div>
    );
};

export default About;