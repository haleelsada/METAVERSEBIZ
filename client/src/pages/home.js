import React from 'react'
import '../styles/home.css';
import Header from '../components/header';
import TickerTape from '../components/ticker-tape';
import Footer from '../components/footer';
import NewNews from '../components/new-news';
// import News from '../components/news';
import tradingImage from '../resources/dotstock-bg-4.jpg';
// import {  } from 'react-icons/fa';

function Home () {

  return (
  <div className='home-container'>
    <Header />
    <TickerTape />
    <div className="home-bg">
        <div className='home-front'>
        <div className='home-contents'>
            <h1 className='home-contents-title'>Learn, practice, invest.<br></br></h1>
            <h2 className='home-contents-subtitle'>master the stocks right here!</h2>
                </div>  
            </div>
            <a href='/trade'>
            <button class="getstart">Start Trading</button>
            </a>
            <div className='bg-image-1'>
            <img className="trade" alt="trade" src={tradingImage} style={{ objectFit: "cover"}}/>
            </div>
            <div className='home-getstarted-box'>
                <h1 className='home-getstarted-title'>Start Your Dotstock Journey</h1>
            <div className='home-getstarted'>
            <a href='/learn'>
                <div className='getstarted-options'>
                    <h1 className='getstarted-options-title'>Learn Crypto &rarr;</h1>
                    <p>Learning how to grasp technical concepts and engaging 
                        in conversation with AI for practical insights and guidance  with
                         real-world application.</p>
                </div>
                </a>
            <a href='/trade'>
                <div className='getstarted-options'>
                    <h1 className='getstarted-options-title'>Practice Crypto &rarr;</h1>
                    <p>Practice trading trading involves analyzing market trends and 
                        testing strategies in simulated environments to develop skills and knowledge. </p>
                </div>
                </a>
                <a href='/portfolio'>
                <div className='getstarted-options'>
                   <h1 className='getstarted-options-title'>Check Progress &rarr;</h1>
                   <p>Checking progress in crypto entails reviewing transaction history for
                     insights and receiving relevant advice to improve overall performance.</p>
                </div>
                </a>
                </div>
                </div>
                
    </div>
    <div>
    <h1 className='home-market-title'>Explore Market News</h1>
    {/* <h3 className='home-market-subtitle'>Learn how global markets work, how they are interrelated, and<br></br>
    how individual companies and sectors can influence their movements.</h3> */}
    </div>
    {/* <News /> */}
    <NewNews />
    <Footer />
    </div>
    

  
);
}

export default Home;
