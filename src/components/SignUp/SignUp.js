import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import "./signup.css"

const Signup = () => {

    const { getName, getPhoto, getEmail, getPassWord, signUp, error } = useAuth();
    return (
        <div className="container signup-container">
            <div className="row">
                <div className="col-lg-4"></div>

                <div className="col-lg-5 mb-5">
                    <div className="signup-div">


                        <h2 className="text-center">Sign Up</h2>
                        <form onSubmit={signUp} className="w-75 mx-auto">
                            <div id="emailHelp" className="form-text">{error}</div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                                <input onBlur={getName} type="text" className="form-control" id="exampleInputEmail1" autoComplete="current-name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Profile Picture url</label>
                                <input onBlur={getPhoto} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={getPassWord} type="password" className="form-control" id="exampleInputPassword1" />

                            </div>
                            <div className="mb-3 form-check">
                                <Link className="link" to="/login">
                                    Already have an account? Please login!
                                </Link>
                            </div>
                            <button type="submit" className="btn btn-primary mb-3">Submit</button>
                        </form>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;