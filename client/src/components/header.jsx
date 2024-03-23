import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <a href="/home">
            <img src='finalproject-logo.png'></img>
        </a>
        <a href="/play">
            <button className='header-button' id="register-button">
                <div className='cntr'>
                    <span>Login  / Register</span>
                </div>
            </button>
        </a>
    </div>
  )
}
export default Header