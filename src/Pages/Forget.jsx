/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Forget = () => {
  const [email, setEmail] = useState(""); 
  const navigate = useNavigate(); 


  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!email) {
      return; 
    }
    navigate("/login"); 
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="form-gap" />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="text-center">
                  <h3>
                    <i style={{color:"var(--salmon-pink)"}} className="fa fa-lock fa-4x" />
                  </h3>
                  <h2 className="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="panel-body">
                    <form
                      id="register-form"
                      role="form"
                      autoComplete="off"
                      className="form"
                      method="post"
                      onSubmit={handleSubmit} 
                    >
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-envelope color-blue" />
                          </span>
                          <input
                           required
                            id="email"
                            name="email"
                            placeholder="Email address"
                            className="form-control"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-block btn-lg"
                        style={{ backgroundColor: "var(--salmon-pink)", color: 'white',outline:"none" }}
                      >
                        Forgot
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
