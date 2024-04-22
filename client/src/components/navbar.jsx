import React from 'react'
import './navbar.css'

function Navbar () {

  return (
    <div className='navbar'>   
        <a href="/portfolio">
        <button className='navbar-portfolio'>
            <div className='navbar-cntr'>
                <span>Portfolio</span>
            </div>
        </button>
        </a>
        <a href="/trade">
                <button className='navbar-trade'>
                    <div className='navbar-cntr'>
                        <span>Trade</span>
                    </div>
                </button>
                </a>
        <a href="/learn">
            <button className='navbar-learn'>
                <div className='navbar-cntr'>
                    <span>Learn</span>
                </div>
            </button>
            </a>
            <a href="/research">
        <button className='navbar-research'>
            <div className='navbar-cntr'>
                <span>Research</span>
            </div>
        </button>
        </a>
</div>
    

  
);
}

export default Navbar;
