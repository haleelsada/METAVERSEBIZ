import React from 'react';
import '../styles/portfolio.css';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';

function Portfolio() {
  
  return (
    <div className='portfolio-bg'>
      <Header />
      <TickerTape />
      <Navbar />
      <div className='portfolio-container'>
        <h1 className='portfolio-title'>Portfolio</h1>
        <div className='portfolio-form-box'>
        <form>
        <div className='portfolio-account-value-box'>
        <label htmlFor='account-value' className='portfolio-account-value-label'>Account-value</label>
        <input type='text' name='account-value' readOnly value= "500" required className='portfolio-account-value-input'></input>
        </div>
        <div className='portfolio-todays-change-box'>
        <label htmlFor='todays-change' className='portfolio-todays-change-label'>Today's change</label>
        <input type='text' name='todays-change' readOnly value= "+0.00" required className='portfolio-todays-change-input'></input>
        </div>
        <div className='portfolio-annual-return-box'>
        <label htmlFor='annual-return' className='portfolio-annual-return-label'>Annual return</label>
        <input type='text' name='annual-return' readOnly value= "0.00%" required className='portfolio-annual-return-input'></input>
        </div>
        <div className='portfolio-buying-power-box'>
        <label htmlFor='buying-power' className='portfolio-buying-power-label'>Buying power</label>
        <input type='text' name='buying-power' readOnly value= "1000" required className='portfolio-buying-power-input'></input>
        </div>
        <div className='portfolio-cash-box'>
        <label htmlFor='cash' className='portfolio-cash-label'>Cash</label>
        <input type='text' name='cash' value= "1000" readOnly required className='portfolio-cash-input'></input>
        </div>
        </form>
        </div>
    </div>
    <div className='portfolio-graph-container'>
      <h1 className='portfolio-graph-title'>Portfolio Graph</h1>
      <div className='portfolio-graph'></div>
    </div>
    </div>
  );
}

export default Portfolio;
