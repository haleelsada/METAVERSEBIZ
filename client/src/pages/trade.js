import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';

function Trade() {
  
  return (
    <div className='trade-container'>
     <Header />
      <TickerTape />
      <Navbar />
    </div>
  );
}

export default Trade;
