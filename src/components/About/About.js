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
                    <img height="457px" src={'https://reflectionsinscience.files.wordpress.com/2019/02/curriculum.png?w=640'} alt="" />
                    <p>There are countless online education marketplaces on the internet. And there’s us. We are not the biggest. We are not the cheapest. But we are the fastest growing. We have the highest course completion rate in the industry.</p>
                    <br />
                    <p>And the reason is, we don’t give up. When a student commits to a course, we commit to the student. We are not going to sugar coat it - we will make you complete, come what may. You may not have given much thought to what you are signing up for, but we believe you are signing up for knowledge that is useful and complete. We are ridiculously committed to our students. Be it constant reminders, relentless masters or 24 x 7 online support - we will absolutely make sure that you run out of excuses to not complete the course.</p>
                </div>
                <div className="col-lg-6">
                    <h3>Our Vision</h3>
                    <img width="100%" src={'https://www.kindpng.com/picc/m/50-500971_our-vision-logo-hd-png-download.png'} alt="" />
                    <p><blockquote>
                        "Creative Info Training Centre provides innovative, effective and integrated training opportunities for people who need new skills to enjoy the dignity that comes with employment, independence and self-reliance"

                    </blockquote></p>
                    <p><blockquote>
                        "Creative Info Training Centre provides innovative, effective and integrated training opportunities for people who need new skills to enjoy the dignity that comes with employment, independence and self-reliance"

                    </blockquote></p>
                    <p><blockquote>
                        "Creative Info Training Centre provides innovative, effective and integrated training opportunities for people who need new skills to enjoy the dignity that comes with employment, independence and self-reliance"

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
                            ""Creative Info Training  Centre provides           innovative, effective and integrated  training opportunities for people who need new skills to enjoy the  dignity that comes with employment, independence  and self-reliance""
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