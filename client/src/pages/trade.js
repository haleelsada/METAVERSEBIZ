import React from 'react';
import Header from '../components/header';
import TickerTape from '../components/ticker-tape';
import Footer from '../components/footer';
import Map from '../components/map';
import Screener from '../components/screener';

function Trade() {
  
  return (
    <div className='trade-container'>
      <Header />
      <TickerTape />
      <div>
        <Map />
      </div>
      <div>
      <Screener />
      </div>
      <Footer />
    </div>
  );
}

export default Trade;
