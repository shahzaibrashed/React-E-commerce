import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
  
    if (trimmedUsername === "" || trimmedPassword === "") {
      toast.error("Username and Password cannot be empty!");
      return;
    }
  
    if (trimmedPassword.length < 8) {
      toast.error("Password must be at least 8 characters long!");
      return;
    }
  
    if (trimmedPassword.length > 16) {
      toast.error("Password cannot be more than 16 characters!");
      return;
    }

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(trimmedPassword)) {
      toast.error("Password must contain at least one special character!");
      return;
    }

    toast.success("Login successful!");
    navigate("/");
  };
  

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="avatar">
            <i className="material-icons">&#xE7FF;</i>
          </div>
          <h4 className="modal-title">Login  Your Account</h4>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group small clearfix">
            <p>
              <Link to="/forget" className="forgot-link">
                Forgot Password?
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg"
          >
            Login
          </button>
        </form>
        <div className="text-center small mt-3">
          Don't have an account? <Link to="/signUp">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
