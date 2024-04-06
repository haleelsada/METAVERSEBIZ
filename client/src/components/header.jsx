import React from 'react'
import './header.css'
const Header = () => {

  return (
    <div className='header'>
        <div class="dotstock">
                <h1>DotStock</h1>
        </div>
        <a href='/login'>
        <button className='header-button' id="header-button">Login / Register</button>
        </a>
        </div>  
  )
}
export default Header