import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {

  const [user, setUser] = useState(
    {
      email:'',
      password:'',
    }
  );

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  return (
    <>
        <div className="container">
          <div className="header">
            <div className="text">
              <h1>Sign In</h1>
            </div>
            <div className="inputs">
              <div className="input">
                <input type="email" name="email" id="email" placeholder='Email Address' value={user.email} onChange={handleInputs}/>
              </div>
              <div className="input">
                <input type="password" name="password" id="password" placeholder='Password' value={user.password} onChange={handleInputs}/>
              </div>
            </div>
            <div className="changePassword">
              <p>Don't remember your password? <a href="/">Create or Reset password</a></p>
            </div>
            <div className="login-button btn">
              Sign In
            </div>
            OR
            <div className="google-login-button btn">
              Google Sign In
            </div>
            <div className="newAccount">
              <p>Don't have a Dell account? <a href="/sign-up">Create an account</a></p>
            </div>
          </div>
        </div>
    </>
  );
}

export default SignIn;