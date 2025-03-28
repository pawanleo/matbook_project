import React from "react";
import "./socialLoginBtn.css";

const SocialLoginButton = ({ icon: Icon, text, onClick }) => {
  return (
    <button onClick={onClick} className="social-login-button">
      {Icon && <span className="icon">{Icon}</span>}
      <span className="text">{text}</span>
    </button>
  );
};

export default SocialLoginButton;
