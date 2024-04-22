import React from 'react';
import Header from '../components/header';
import TickerTape from '../components/ticker-tape';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Map from '../components/map';
import Screener from '../components/screener';

function Research() {
  
  return (
    <div className='research-container'>
      <Header />
      <TickerTape />
      <Navbar />
      <div>
        <h1>Trading Chart</h1>
        <Map />
      </div>
      <div>
      <h1>Screener Table</h1>
      <Screener />
      </div>
      <Footer />
    </div>
  );
}

export default Research;
