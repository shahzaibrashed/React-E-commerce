import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [contact, setContact] = useState("");

    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSignUp = (e) => {
      e.preventDefault();
      if (username.trim() === "" || password.trim() === "" || contact.trim() === "") {
        return;
      }
      navigate("/");
    };
  
  return (
    <>
    
    
    <div className="login-form">
        <form onSubmit={handleSignUp}>
          <div className="avatar">
            <i className="material-icons">&#xE7FF;</i>
          </div>
          <h4 className="modal-title">SignUp  Your Account</h4>
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
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="form-group small clearfix">
        
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg"
          >
         Sign Up
          </button>
        </form>
        <div className="text-center small mt-3">
          Already have an account? <Link to="/login">Login </Link>
        </div>
      </div>
    </>
  )
}

export default SignUp