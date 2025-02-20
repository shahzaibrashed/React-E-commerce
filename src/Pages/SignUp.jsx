import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSignUp = (e) => {
      e.preventDefault();

      const trimmedUsername = username.trim();
      const trimmedPassword = password.trim();
      const trimmedContacts = contact.trim();
    
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
      
      const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
      if (!specialChar.test(trimmedPassword)) {
        toast.error("Password must contain at least one special character!");
        return;
      }

      if (trimmedContacts.length < 11) {
        toast.error("Contact number must be at least 11 digits long! ");
        return;
      }
      if (trimmedContacts.length > 11) {
        toast.error("Contact number cannot be more than 11 digits!");
        return;
      }

      toast.success("SignUp successful!");
      navigate("/login");
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