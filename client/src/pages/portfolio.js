import React from 'react';
import '../styles/portfolio.css';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';

function Portfolio() {
  const username = JSON.parse(localStorage.getItem("username")).toUpperCase();
  const username_modified = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
  const balance = JSON.parse(localStorage.getItem("balance"));
  

  
  
  return (
    <div className='portfolio-bg'>
      <Header />
      <TickerTape />
      <Navbar />
      <div className='portfolio-container'>
        <div className='portfolio-user-and-graph'>
        <div className='portfolio-user-box'>
          <div className='portfolio-user-data'>
          <div className='portfolio-content-title'>OVERVIEW</div>
          <div className='portfolio-username portfolio-padding-small'>Username</div>
          <div className='portfolio-username-value portfolio-padding-large'>{username_modified}</div>
          <div className='portfolio-balance portfolio-padding-small'>Balance</div>
          <div className='portfolio-balance-value portfolio-padding-large'>&#x20b9; {balance}</div>
          </div>
        </div>
        <div className='portfolio-graph-box'>
        <div className='portfolio-graph-data'>
        <div className='portfolio-content-title'>PERFORMANCE</div>
        </div>
        </div>
        </div>
        <div className='portfolio-holdings-and-transactions'>
        <div className='portfolio-holdings-box'>
        <div className='portfolio-holdings-data'>
        <div className='portfolio-content-title'>HOLDINGS</div>
        </div>
        </div>
        <div className='portfolio-transactions-box'>
        <div className='portfolio-transactions-data'>
        <div className='portfolio-content-title'>TRANSACTIONS</div>
        </div>
        </div>
        </div>
    </div>  
    </div>
  );
}

export default Portfolio;
