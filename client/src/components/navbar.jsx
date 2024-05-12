import React from 'react'
import { useLocation } from 'react-router-dom';
import './navbar.css'

function Navbar () {
    const location = useLocation();

    async function userDetails() { 
        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token)
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Token " + token);
        console.log(myHeaders)
       
        let response = await fetch(`http://127.0.0.1:8000/user`, {
            method: 'GET',
            headers: myHeaders,
        });
        let result = await response.json();
        console.log(result);
        localStorage.setItem("username", JSON.stringify(result.username));
        localStorage.setItem("balance", result.balance);
        localStorage.setItem("transactions", result.transactions);
        localStorage.setItem("portfolio", result.portfolio);
      }

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

            <a href="/help">
                <button className={`navbar-button ${location.pathname === '/help' ? 'trade-page' : ''}`}>
                    <div className='navbar-cntr'>
                        <span>HELP</span>
                    </div>
                </button>
            </a>

            <a href="/portfolio">
                <button onClick={userDetails} className={`navbar-button ${location.pathname === '/portfolio' ? 'trade-page' : ''}`}>
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
