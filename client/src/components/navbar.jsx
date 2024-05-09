import React from 'react'
import { useLocation } from 'react-router-dom';
import './navbar.css'

function Navbar () {
    const location = useLocation();

  return (
    <div className='navbar-bg'>
        <div className='navbar'> 

            <a href="/trade">
                <button className={`navbar-button ${location.pathname === '/trade' ? 'trade-page' : ''}`}>
                    <div className='navbar-cntr'>
                        <span>TRADE</span>
                    </div>
                </button>
            </a> 

            <a href="/learn">
                <button className={`navbar-button ${location.pathname === '/learn' ? 'trade-page' : ''}`}>
                    <div className='navbar-cntr'>
                        <span>LEARN</span>
                    </div>
                </button>
            </a> 

            <a href="/research">
                <button className={`navbar-button ${location.pathname === '/research' ? 'trade-page' : ''}`}>
                    <div className='navbar-cntr'>
                        <span>RESEARCH</span>
                    </div>
                </button>
            </a>

            {/* <a href="/help">
                <button className={`navbar-button ${location.pathname === '/help' ? 'trade-page' : ''}`}>
                    <div className='navbar-cntr'>
                        <span>HELP</span>
                    </div>
                </button>
            </a> */}

            <a href="/portfolio">
                <button className={`navbar-button ${location.pathname === '/portfolio' ? 'trade-page' : ''}`}>
                    <div className='navbar-cntr'>
                        <span>PORTFOLIO</span>
                    </div>
                </button>
            </a>
                
        </div>
    </div>
    

  
);
}

export default Navbar;
