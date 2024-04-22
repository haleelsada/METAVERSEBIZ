import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';

function Learn() {
  
  return (
    <div className='learn-container'>
      <Header />
      <TickerTape />
      <Navbar />
    </div>
  );
}

export default Learn;
