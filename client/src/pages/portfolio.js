import React, { useState } from 'react';
import '../styles/portfolio.css';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';

function Portfolio() {
  const username = JSON.parse(localStorage.getItem("username")).toUpperCase();
  const username_modified = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
  const balance = JSON.parse(localStorage.getItem("balance"));
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  const portfolio = JSON.parse(localStorage.getItem("portfolio")) || [];

  return (
    <div className='portfolio-bg'>
      <Header />
      <TickerTape />
      <Navbar />
      <div className='portfolio-container'>
        <div className='portfolio-user-and-graph'>
          <div className='portfolio-user-box'>
            <div className='portfolio-user-data'>
              <div className='portfolio-user-title'>OVERVIEW</div>
              <div className='portfolio-username portfolio-padding-small'>Username</div>
              <div className='portfolio-username-value portfolio-padding-large'>{username_modified}</div>
              <div className='portfolio-balance portfolio-padding-small'>Balance</div>
              <div className='portfolio-balance-value portfolio-padding-large'>&#x20b9; {balance}</div>
            </div>
          </div>
          <div className='portfolio-graph-box'>
            <div className='portfolio-graph-data'>
              <div className='portfolio-user-title'>PERFORMANCE</div>
            </div>
          </div>
        </div>
        <div className='portfolio-holdings-and-transactions'>
        <div className='portfolio-content-title'>HOLDINGS</div>
          <div className='portfolio-holdings-box'>
            <div className='portfolio-holdings-data'> 
              <div className='portfolio-holdings-key'>
                <div className='portfolio-holdings-key-value'>Stocks Name</div>
                <div className='portfolio-holdings-key-value'>Quantity</div>
              </div>
              {portfolio.map((item, index) => (
                <div className='portfolio-holdings-list' key={index}>
                  {Object.keys(item).map((key, idx) => (
                    <span style={{marginRight: '10px'}} key={idx}>{item[key]}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className='portfolio-content-title'>TRANSACTIONS</div>
          <div className='portfolio-transactions-box'>
            <div className='portfolio-transactions-data'>
              <div className='portfolio-transactions-key'>
                <div className='portfolio-transactions-key-value'>Stocks Name</div>
                <div className='portfolio-transactions-key-value'>Date of transaction(Along with time)</div>
                <div className='portfolio-transactions-key-value'>Price</div>
                <div className='portfolio-transactions-key-value'>No of Stocks</div>
                <div className='portfolio-transactions-key-value'>Action</div>
              </div>
              {transactions.map((item, index) => (
                <div className='portfolio-transactions-list' key={index}>
                  {Object.keys(item).map((key, idx) => (
                    <span key={idx}>
                      {item[key]}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
