import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';
import SearchSymbol from '../components/search-symbol';

function Trade() {
  
  return (
    <div className='trade-container'>
     <Header />
      <TickerTape />
      <Navbar />
      <div>
      <SearchSymbol />
      </div>
    </div>
  );
}

export default Trade;
