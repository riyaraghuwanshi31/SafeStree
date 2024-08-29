import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Perform sign-up validation here
    navigate("/welcome");
  }

  return (
    <div className="bodyLogin">
      <div className="containerLogin">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="headingsl">
                <h2 >SIGN UP</h2>
              </div>

              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input" placeholder="Name" />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-phone"></i>
                <input type="text" className="login__input" placeholder="Phone Number" />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-envelope"></i>
                <input type="text" className="login__input" placeholder="Email" />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-calendar"></i>
                <input type="text" className="login__input" placeholder="Age" />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-home"></i>
                <input type="text" className="login__input" placeholder="Address" />
              </div>
              <button type="button" className="button login__submit" onClick={handleSignUp}>
                <span className="button__text">Sign Up</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
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
}

export default Signup
