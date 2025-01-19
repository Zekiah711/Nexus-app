import React from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/google.png"


function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-up form submitted!");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Create Your Account</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p>
          Already have an account? &nbsp; <Link to="/login"><span className="login-link">Login</span></Link>
        </p>
        <div className="divider">
          <hr style={{ flex: 1, borderColor: "#ccc" }} />
          <span>Or</span>
          <hr style={{ flex: 1, borderColor: "#ccc" }} />
        </div>
        <button className="google-signin">
          <img src={Google} alt="Google" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default SignUp;
