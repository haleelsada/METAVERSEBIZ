import React from 'react'
import './login.css';
import GoogleLogin from 'react-google-login';
const Login = () => {
  return (
    <div className='login-bg'>
      <div className='login-left-bg'>

      </div>
      <div className='login-right-bg'>
        <div className='login-title'>
          <span>Welcome to Dot Stock</span>
        </div>
        <GoogleLogin
              
              render={renderProps => (
                  <div className="login-social-item">
                    <img onClick={renderProps.onClick} className="login-social-item__image" src={"logo.png"}                   alt="login using google"/>
                  </div>
              )}
              buttonText="Login"
              cookiePolicy={'single_host_origin'}
            />
      </div>
    </div>
        
           
  )
}
export default Login