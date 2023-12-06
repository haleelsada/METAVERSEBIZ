import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-sub'>
        <div className="logo">
        <a href="/home">
            <img className='logo1' src="metaversebiz-logo.png" alt="metaverse-logo" />
            </a>
        </div>
            <div className='dropdown'>
            <a href="/signin">
                    <button className='tosignin-button'>
                        <div className='cntr'>
                            <span>SIGN IN</span>
                        </div>
                    </button>
                    </a>
                    <div class="dropdown-content">
                        <a href="/signup">
                            <div className='cntr-li' id="cntr-li1">
                                <span>NEW HERE?</span>
                                <a href='/signup' id='tosignup'><span>SIGN UP</span></a>
                            </div>
                        </a>
                    </div>
            </div>
            <a href="/play">
                <button className='dropd-button'>
                <div className='cntr'>
                            <span>START PLAYING</span>
                        </div>
                </button>
                </a>
        </div>
    </div>
  )
}

export default Header