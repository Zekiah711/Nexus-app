import React from "react";
import Google from "../../assets/google.png"
import { Link } from "react-router-dom";



function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login to Nexus</h1>
        <form>
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <a href="#" className="forgot-password">Forgot Password?</a>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p>
          Don't have an account? &nbsp; <Link to="/signup"><span className="sign-up"> Sign Up</span></Link>
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
};

export default LoginPage;
