import React from "react";
const SocialLoginButton = ({ icon: Icon, text, onClick }) => {
    return (
      <button onClick={onClick} className="social-login-button">
        {Icon && <img src={Icon} alt={text} className="social-icon" />}
        <span>{text}</span>
      </button>
    );
  };
  
  export default SocialLoginButton; // ✅ Correct export
  