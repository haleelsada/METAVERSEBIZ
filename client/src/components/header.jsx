import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <div class="dotstock">
                <h1>Dot stock</h1>
                </div>
                <div class="search-box">
                    <input type="text"  id="search-button"></input>
                </div>
                
        <a href="/play">
        
            <button className='header-button' id="register-button">
                
                <div className='cntr'>
                    <span>Login/Register</span>
                   
                </div>
            </button>
            
        </a>
       
        </div>  
  )
}
export default Header