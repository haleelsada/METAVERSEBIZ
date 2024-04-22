import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';

function Portfolio() {
  
  return (
    <div className='portfolio-container'>
      <Header />
      <TickerTape />
      <Navbar />
    </div>
  );
}

export default Portfolio;
