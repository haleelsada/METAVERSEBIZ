import React, {useState} from 'react'
import '../styles/register.css';
import { useNavigate } from 'react-router-dom';
import validator from 'validator'
import Swal from 'sweetalert2';

function Register() {
  const [isemailFocused, setIsemailFocused] = useState(false);
  const [ispasswordFocused, setIspasswordFocused] = useState(false);
  const [isconfirmpasswordFocused, setIsconfirmpasswordFocused] = useState(false);
  const [isusernameFocused, setIsusernameFocused] = useState(false);
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [passworderrorMessage, setPasswordErrorMessage] = useState('') 
  const [passwordstrongMessage, setPasswordStrongMessage] = useState('') 
  const [passwordmatch, setPasswordmatch] = useState('')
  const [passworderror, setPassworderror] = useState('')
  


  async function submitRegister(e) {
    e.preventDefault();
    if (password === confirmpassword) {
      let item = {username, email, password, confirmpassword}
      let response = await fetch("http://127.0.0.1:8000/signup", {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(item)
      });
      let result = await response.json();
      console.log(result);
      
      if (response.status === 201) {
        Swal.fire({
          text: "User created successfully",
          icon: "success"
        });
        navigate ("/login");
      } else {
          setErrorMessage(result.error);
      }
    }
}


const validate = (value) => { 
  if (validator.isStrongPassword(value, { 
    minLength: 8, minLowercase: 1, maxLength: 15,
    minUppercase: 1, minNumbers: 1, minSymbols: 1 
  })) { 
    setPasswordStrongMessage('Strong password')
    setPasswordErrorMessage('') 
  } else { 
    setPasswordStrongMessage('') 
    setPasswordErrorMessage('Not a strong password') 
  } 
}

const checkpassword = (password, confirmpassword) => {
  if (password !== confirmpassword) {
    setPassworderror("Passwords don't match");
    setPasswordmatch('');
  } else {
    setPassworderror('');
    setPasswordmatch("Passwords matched");
  }
}

return (
  <div className='register-cont'>
    <div className='register-bg'>
      <div className='register-left-bg'>
        <div className='register-left-text-1'>
          <h1>Learn, Practice, <br></br>Invest.</h1>
        </div>
        <div className='register-left-box'></div>
        <div className='register-left-text-2'>
          <div className='register-left-text-input'>Dotstock,</div>
          <div className='register-left-text-input'>the stock master.</div>
        </div>
      </div>
      <div className='register-right-bg'>
        <div className='register-title-box'>
          <div className='register-title'>
            <span>Welcome to Dotstock</span>
          </div>
        </div>
        <div className='register-register-options'>
          <form onSubmit={submitRegister}>
            <div className='register-username-box'>
              <label htmlFor="register-username" className='register-username-label' style={{ color: isusernameFocused ? '#fdd835' : '#b5b5b5' }}>Username </label>
              <input type='text' name='register-username' required className='register-username-input' value={username} onChange={e => setUsername(e.target.value)} onFocus={() => setIsusernameFocused(true)} onBlur={() => setIsusernameFocused(false)}></input>
            </div>
            <div className='register-email-box'>
              <label htmlFor="register-email" className='register-email-label' style={{ color: isemailFocused ? '#fdd835' : '#b5b5b5' }}>Email Address </label>
              <input type='email' name='email' required className='register-email-input' value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setIsemailFocused(true)} onBlur={() => setIsemailFocused(false)}></input>
            </div>
            <div className='register-password-box'>
              <label htmlFor="register-password" className='register-password-label' style={{ color: ispasswordFocused ? '#fdd835' : '#b5b5b5' }}>Password </label>
              <input type='password' name='password' required value={password} onChange={(e) => {validate(e.target.value);setPassword(e.target.value);}}  className='register-password-input' onFocus={() => setIspasswordFocused(true)} onBlur={() => setIspasswordFocused(false)}></input>
              {passworderrorMessage === '' ? null : <span style={{ marginLeft: '125px', color: 'red', }}>{passworderrorMessage}</span>} 
              {passwordstrongMessage === '' ? null : <span style={{ marginLeft: '125px', color: 'green', }}>{passwordstrongMessage}</span>} 
            </div>
            <div className='register-confirmpassword-box'>
              <label htmlFor="register-confirmpassword" className='register-confirmpassword-label' style={{ color: isconfirmpasswordFocused ? '#fdd835' : '#b5b5b5' }}>Confirm Password </label>
              <input type='password' value={confirmpassword} required name='confirmpassword' className='register-confirmpassword-input' onChange={(e) => {setConfirmPassword(e.target.value);checkpassword(password, e.target.value);}} onFocus={() => setIsconfirmpasswordFocused(true)} onBlur={() => setIsconfirmpasswordFocused(false)}></input>
              {passworderror === '' ? null : <span style={{ marginLeft: '125px', color: 'red', }}>{passworderror}</span>} 
              {passwordmatch === '' ? null : <span style={{ marginLeft: '125px', color: 'green', }}>{passwordmatch}</span>} 
            </div>
            <div className='register-button-box'>
              <button className='register-button-click'>Register</button>
            </div>
            <div>{errorMessage && <div className="error" style={{ color: '#ed4337', marginLeft: '125px', marginTop: '10px'}}>{errorMessage}</div>}</div>
            <div className='register-no-account'>
              <a href="/login" className='register-create-account'>Already have an account? <span  className='register-create-account-link'>Login</span></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>   
)
}

export default Register