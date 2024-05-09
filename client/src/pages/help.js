import React from 'react';
import '../styles/help.css';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';

function Help() {
  
  return (
    <div className='help-container'>
      <Header />
      <TickerTape />
      <Navbar />
    </div>
  );
}

export default Help;


