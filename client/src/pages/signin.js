import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import '../styles/signin.css'
import Header from '../components/header';
import Footer from '../components/footer';
const Signin = () => {
        //const [signinAs, setsigninAs] = useState("admin")
        const [username,setUsername] = useState(null)
        const [password,setPassword] = useState(null)
        const navigate = useNavigate();

        const handlesigninFormSubmit = (event) => {     // Handle sign-in signic
          event.preventDefault()
          if(username==="metaversebiz@gmail.com" && password==="12345"){
            navigate("/home")
          }
          console.sign('Sign In Form Submitted')
          // console.sign('Sign In As:', signinAs)
        }

  return (
    <div>
      <Header />
    <div className='signin-bg'>
    <div class="signin-container">
        <div className='signin-left-container'>
          <img id="signin-meta-icon" src="metaversebiz-icon2.png" alt="metaversebiz-icon"/>
          <h1 className='signin-title'>Welcome<br></br>Back to<br></br>MetaverseBiz</h1>
          <h2 className='signin-subtitle'>Sign in and sculpt<br></br>your business legacy</h2>
          <p className='signin-copyright'>&copy; metaversebiz.com</p>
        </div>
        <div className='signin-right-container'>
          <div className='signin-sub-right-cont'>
      <p className="signin-text">Sign In</p><br></br>
      <form onSubmit={handlesigninFormSubmit} class="signin-form">
        <label for="username" className='signin-label'>Email</label><br></br>
        <input type="email" required 
          id='username' onChange={(e)=>setUsername(e.target.value)} className="signin-input"/><br></br>
          <label for="password" className='signin-label'>Password</label><br></br>
        <input type="password" required id='password' onChange={(e)=>setPassword(e.target.value)}
          className="signin-input"/><br></br>
           <input type="submit" value="Sign In" className="signin-button"/><br></br>
        <a href='/sendmail' className='signin-help1' id="signin-forgot">Forgot Password?</a><br></br><br></br>
        <label for="new2signin" className='new2signin-lab'>New to MetaverseBiz? </label>
        <a href='/signup' className='signin-help2' id="new2signin"> Sign Up</a><br></br>
      </form>
      </div>
      </div>
    </div>
    </div>
    <Footer />
    </div>)}
export default Signin