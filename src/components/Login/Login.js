import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// import "./Login.css";

const Login = () => {

    const { signInWithGoogle, error, getEmail, getPassWord, SignInWithEmail } = useAuth();
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-lg-4"></div>

                <div className="col-lg-5">
                    <div className="login-div mb-3">
                        <h2 className="text-center">Login</h2>
                        <form onSubmit={SignInWithEmail} className="w-75 mx-auto">
                            <div className="mb-3">

                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text text-danger">{error}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={getPassWord} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div>
                                <Link className="link" to="/resetpassword">
                                    Forget Password?
                                </Link>
                            </div>
                            <div className="mb-3 ">
                                <Link className="link" to="/signup">
                                    Need an Account? Please Sign up!
                                </Link>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                        <div className="text-center">
                            <h4>Login With</h4>
                            <button onClick={signInWithGoogle} className="btn">
                                <img width="40px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                            </button>

                        </div>

                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default Login;