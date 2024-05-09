import React, {useEffect, useState} from 'react'
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import validator from 'validator'

function Login() {
  const [currentUser, setCurrentUser] = useState();
  const [isemailFocused, setIsemailFocused] = useState(false);
  const [ispasswordFocused, setIspasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [passworderrorMessage, setPasswordErrorMessage] = useState('') 

  async function submitLogin(e) {
    e.preventDefault();
    let item = {email, password}
    let result = await fetch("http://127.0.0.1:8000/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(item)
    });
    result = await result.json();
    console.log(result);
    
    if (result.token) {
       setCurrentUser(true);
       alert("Login successfull")
       navigate ("/");
    } else {
        setErrorMessage(result.error);
    }
}

const validate = (value) => {
  if (value.length < 8) {
    setPasswordErrorMessage('Password should contain minimum 8 characters')
  } else if (value.length > 15) {
    setPasswordErrorMessage('Password should not exceed 15 characters')
  } else {
    setPasswordErrorMessage('')
  }
};

  
  
  return (
    <div className='login-cont'>
    <div className='login-bg'>
      <div className='login-left-bg'>
        <div className='login-left-text-1'>
        <h1>Learn, Practice, <br></br>Invest.</h1>
        </div>
        <div className='login-left-box'></div>
        <div className='login-left-text-2'>
        <div className='login-left-text-input'>Dotstock,</div>
        <div className='login-left-text-input'>the stock master.</div>
        </div>
      </div>
      <div className='login-right-bg'>
        <div className='login-title-box'>
        <div className='login-title'>
          <span>Back to DotStock</span>
        </div>
        </div>
        <div className='login-login-options'>
            <form onSubmit={e => submitLogin(e)}>
            <div className='login-email-box'>
              <label htmlFor="login-email" className='login-email-label' style={{ color: isemailFocused ? '#fdd835' : '#b5b5b5' }}>Email Address </label>
              <input type='email' name='email' required className='login-email-input' value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setIsemailFocused(true)} onBlur={() => setIsemailFocused(false)}></input>
            </div>
            <div className='login-password-box'>
              <label htmlFor="login-password" className='login-password-label' style={{ color: ispasswordFocused ? '#fdd835' : '#b5b5b5' }}>Password </label>
              <input type='password' name='password' required className='login-password-input' value={password} onChange={(e) => {validate(e.target.value);setPassword(e.target.value);}} onFocus={() => setIspasswordFocused(true)} onBlur={() => setIspasswordFocused(false)}></input>
              {passworderrorMessage === '' ? null : <span style={{ marginLeft: '125px', color: 'red', }}>{passworderrorMessage}</span>} 
            </div>
            <div className='login-button-box'>
              <button type='submit' className='login-button-click'>Login</button>
            </div>
            <div>{errorMessage && <div className="error" style={{ color: '#ed4337', marginLeft: '125px', marginTop: '10px'}}>{errorMessage}</div>}</div>
            <div className='login-no-account'>
              <a href="/register" className='login-create-account' >Don't have an account? <span  className='login-create-account-link'>Register</span>
              </a>
              </div>
              </form>
            </div>
      </div>
    </div>
    </div>   
           
  )
}
export default Login