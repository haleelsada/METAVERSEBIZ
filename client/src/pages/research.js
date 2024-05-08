import React from 'react';
import Header from '../components/header';
import TickerTape from '../components/ticker-tape';
import Navbar from '../components/navbar';
import Map from '../components/map';
import Screener from '../components/screener';

function Research() {
  
  return (
    <div className='research-container'>
      <Header />
      <TickerTape />
      <Navbar />
      <div style={{marginBottom: '100px'}}>
        <div className='research-map-title' style={{marginLeft: '10vw',marginTop:'50px', color: '#ffffff', fontSize: '20px', 
        fontWeight: '600'}}>Trading Chart</div>
        <Map />
      </div>
      <div style={{marginBottom: '100px'}}>
      <div className='research-screener-title' style={{marginLeft: '10vw',marginTop:'50px', color: '#ffffff', fontSize: '20px', 
        fontWeight: '600'}}>Screener Table</div>
      <Screener />
      </div>
    </div>
  );
}

export default Research;
