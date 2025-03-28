import React, { useState } from "react";
import "./Login.css";
import SocialLoginButton from "../../components/SocialLoginBtn/SocialLoginBtn";
import InputField from "../../components/InputField/InputField";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../utils/Icons";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic here
    console.log('Login attempted', { email, password, rememberMe });
  };

  return (
    <div className="image-overlay-container">
      {/* Background Image */}
      <img
        src="images/bg-img.png"
        alt="Background"
        className="background-image"
      />

      {/* Overlay Image */}
      <img
        src="images/bg-overlay.png"
        alt="Overlay"
        className="overlay-image"
      />

      {/* Centered Div */}
      <div className="centered-content-wrapper text-white">
        <div className="centered-content">
          <div className="brand_intro">
            <div>
              <img
                src="/images/logo_highbridge.svg"
                alt="brand_logo"
                className="brand_logo"
              />
            </div>
            <div>
              <h2 className="brand_moto">Building the Future...</h2>
              <p className="about_brand">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="login_form_wrapper">
          <div className="login-container">
      <div className="login-header">
        <h2>WELCOME BACK!</h2>
        <p>Log In to your Account</p>
      </div>

      <form onSubmit={handleLogin} className="login-form">
        {/* Email Input */}
        <div className="input-group">
          <label>Email</label>
          <InputField 
            type="email"
            placeholder="Type here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label>Password</label>
          <InputField
            type="password"
            placeholder="Type here..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="form-actions">
          <div className="remember-me">
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              id="remember-checkbox"
            />
            <label htmlFor="remember-checkbox">Remember me</label>
          </div>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button 
          type="submit"
          className="login-button"
        >
          Log In
        </button>

        {/* Divider */}
        <div className="divider">
          <span>Or</span>
        </div>

        {/* Social Login Buttons */}
        <div className="social-logins">
          <SocialLoginButton
            icon={<GoogleIcon/>}
            text="Log In with Google"
            onClick={() => console.log('Google Login')}
          />
          <SocialLoginButton
            icon={<FacebookIcon/>}
            text="Log In with Facebook"
            onClick={() => console.log('Facebook Login')}
          />
          <SocialLoginButton 
            icon={<AppleIcon/>}
            text="Log In with Apple"
            onClick={() => console.log('Apple Login')}
          />
        </div>

        {/* Sign Up Link */}
        <div className="signup-link">
          New User? <a href="#">SIGN UP HERE</a>
        </div>
      </form>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
