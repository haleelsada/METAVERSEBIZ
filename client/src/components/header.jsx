import React from "react";
import './header.css'
import {useNavigate} from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
function Header () {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"))
  // const username = JSON.parse(localStorage.getItem("username")).toUpperCase();
  const username_modified = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
  console.log("hi" + token)

  return (
    <div className='header-container'>
        <div className="header-website-name">
        <a style={{color: 'white'}} href='/'>
          <h1>DotStock</h1>
        </a>
        </div>
        <div className="header-username"><div className="header-username-symbol"><FaUserCircle /> </div><div className="header-username-text">{username_modified}</div></div>
        {(!token) ? (
        <div>
        <a href='/login'>
        <button className='header-button' id="header-button">Login / Register</button>
        </a>
        </div>) : (
          <div>
          <a href='/login'>
          <button className='header-button' id="header-button">Login / Register</button>
          </a>
          </div>
        )}
        </div>  
  )
}
export default Header