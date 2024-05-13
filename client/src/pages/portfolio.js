import React, { useState } from 'react';
import '../styles/portfolio.css';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';
import Table from 'react-bootstrap/Table';

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
        </div>
        <div className='portfolio-holdings-and-transactions'>
          <div className='portfolio-content-title'>HOLDINGS</div>
          <div className='portfolio-holdings-box'>
            <Table striped bordered hover className="portfolio-table">
              <thead>
                <tr>
                  <th className="portfolio-table-header">Stock Name</th>
                  <th className="portfolio-table-header">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((item, index) => (
                  <tr key={index}>
                    {Object.keys(item).map((key, idx) => (
                      <td key={idx} className="portfolio-table-cell">{item[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className='portfolio-content-title'>TRANSACTIONS</div>
          <div className='portfolio-transactions-box'>
            <Table striped bordered hover className="portfolio-table">
              <thead>
                <tr>
                  <th className="portfolio-table-header">Stock Name</th>
                  <th className="portfolio-table-header">Date of Transaction</th>
                  <th className="portfolio-table-header">Price</th>
                  <th className="portfolio-table-header">No of Stocks</th>
                  <th className="portfolio-table-header">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((item, index) => (
                  <tr key={index}>
                    {Object.keys(item).map((key, idx) => (
                      <td key={idx} className="portfolio-table-cell">{item[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
