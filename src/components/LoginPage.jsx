import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login validation here
        navigate("/welcome");
    }

    const handleSignup = () => {
        navigate("/signup");
    }

    return (
        <div className="bodyLogin">
            <div className="containerLogin">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">

                            <div className="headingsl">
                                <h2 >LOGIN</h2>
                            </div>


                            <div className="loginF login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder="User name / Email" />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" />
                            </div>
                            <button type="button" className="button loginBtn login__submit" onClick={handleLogin}>
                                <span className="button__text">Log In</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>

                            <div className="sF">
                                <div>
                                    <a className="signup" href="#" onClick={handleSignup}>SignUp</a>
                                </div>
                                <div>
                                    <a className="forgetpass" href="#">Forget Password?</a>
                                </div>
                            </div>
                        </form>
                        <div className="social-login">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                <a href="#" className="social-login__icon fab fa-instagram"></a>
                                <a href="#" className="social-login__icon fab fa-facebook"></a>
                                <a href="#" className="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div> */}
                </div>
            </div>
        </div>

    );
};

export default LoginPage;
