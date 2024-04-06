import React, {useState} from 'react'
import '../styles/register.css';
import GoogleLogin from 'react-google-login';
const Register = () => {
  const [isemailFocused, setIsemailFocused] = useState(false);
  const [ispasswordFocused, setIspasswordFocused] = useState(false);
  const [isconfpasswordFocused, setIsconfpasswordFocused] = useState(false);

  return (
    <div className='register-bg'>
      <div className='register-left-bg'>

      </div>
      <div className='register-right-bg'>
        <div className='register-title-box'>
        <div className='register-title'>
          <span>Welcome Back</span>
        </div>
        </div>
        <div className='register-register-options'>
        <GoogleLogin
              clientId="108490793456-0flm4qh8ek4cb4krt7e06980o4sjvado.apps.googleusercontent.com"
              render={renderProps => (
                  <div className="register-google-box">
                    <div className='register-google-button'>
                    <img onClick={renderProps.onClick} className="register-google-icon" src={'data:image/png;base64,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'} alt=""/>
                  <div className='register-google-text'>Continue with Google</div>
                  </div>
                  </div>
              )}
              buttonText="register"
              cookiePolicy={'single_host_origin'}
            />
            <div className='register-or-box'>
              <div className='register-or-line'>
              </div>
              <div className='register-or-text'>Or</div>
              <div className='register-or-line'>
              </div>
            </div>
            <div className='register-email-box'>
              <label htmlFor="register-email" className='register-email-label' style={{ color: isemailFocused ? '#00b386' : '#b5b5b5' }}>Email Address </label>
              <input type='text' name='register-email' className='register-email-input' onFocus={() => setIsemailFocused(true)} onBlur={() => setIsemailFocused(false)}></input>
            </div>
            <div className='register-password-box'>
              <label htmlFor="register-password" className='register-password-label' style={{ color: ispasswordFocused ? '#00b386' : '#b5b5b5' }}>Password </label>
              <input type='text' name='register-password' className='register-password-input' onFocus={() => setIspasswordFocused(true)} onBlur={() => setIspasswordFocused(false)}></input>
            </div>
            <div className='register-confpassword-box'>
              <label htmlFor="register-confpassword" className='register-confpassword-label' style={{ color: isconfpasswordFocused ? '#00b386' : '#b5b5b5' }}>Confirm Password </label>
              <input type='text' name='register-confpassword' className='register-confpassword-input' onFocus={() => setIsconfpasswordFocused(true)} onBlur={() => setIsconfpasswordFocused(false)}></input>
            </div>
            <div className='register-button-box'>
              <button className='register-button-click'>Register</button>
            </div>
            <div className='register-no-account'>
              <a href="/login" className='register-create-account'>Already have an account? <span  className='register-create-account-link'>Login</span>
              </a>
            </div>
            </div>
      </div>
    </div>
        
           
  )
}
export default Register