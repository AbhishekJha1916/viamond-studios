import React, { useState } from 'react';
import './SignUp.scss';

const SignUp = () => {

  const [user, setUser] = useState(
    {
      first_name:'',
      last_name:'',
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
        <>
        <div className="container">
          <div className="header">
            <div className="text">
              <h1>Create Your Account</h1>
            </div>
            <div className="inputs">
              <div className="input">
                <input type="text" name="first_name" id="f-name" placeholder='First Name' value={user.first_name} onChange={handleInputs}/>
              </div>
              <div className="input">
                <input type="text" name="last_name" id="l-name" placeholder='Last Name' value={user.last_name} onChange={handleInputs}/>
              </div>
              <div className="input">
                <input type="email" name="email" id="email" placeholder='Email Address' value={user.email} onChange={handleInputs}/>
              </div>
              <div className="input">
                <input type="password" name="password" id="password" placeholder='Password' value={user.password} onChange={handleInputs}/>
                <p>Passwords must be between 8 and 20 characters in length and contain 1 <br />
                   upper case letter, 1 lower case letter, and 1 number.</p>
              </div>
            </div>
            <div className="note">
              <p>Viamond Studios and its group of companies (“Viamond Studios”) would like to stay <br/> 
                 in touch and update you on products, services, solutions, exclusive offers, <br />
                 and special events. For more details about our information practices, see <br />
                 our Privacy Statement. You can unsubscribe at any time.</p>
            </div>
            <div className="terms-cod">
              <input type="radio" name="terms-cod" id="terms-cod" required/> <span>Yes, I would like Viamond Studios to send me email communications.</span>
              <p>By clicking <span>“Create Account”</span>, you agree to our <a href="/">Terms & Conditions.</a></p>
            </div>
            <div className="signUp-button btn">
              Create Account
            </div>
          </div>
        </div>
    </>
    </>
  );
}

export default SignUp;