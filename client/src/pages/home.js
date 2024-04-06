import React from 'react'
import '../styles/home.css';
import Header from '../components/header';
import Footer from '../components/footer';
import tradingImage from '../resources/metaversebiz-2.jpg';
// import {  } from 'react-icons/fa';

function Home () {

  return (
  <div className='home-container'>
    <Header />
    <div className="home-bg">
        <div className='home-front'>
        <div className='home-contents'>
            <h1 className='home-contents-title'>All things stock,<br></br>right here.</h1>
            <h2 className='home-contents-subtitle'>Built for a growwing world.</h2>
                </div>  
            </div>
            <a href='/getstart'>
            <button class="getstart">Get started</button>
            </a> 
            <div className='bg-image-1'>
            <img className="trade" alt="trade" src={tradingImage} />
            </div>
            <div className='home-getstarted'>
            
                <div className='getstarted-options'>
                    <h1>Practice Crypto</h1>
                    <p>Practice trading trading involves analyzing market trends and 
                        testing strategies in simulated environments to develop skills and knowledge. </p>
                    <button class="getstart-practice">Get started</button>
                </div>
                <div className='getstarted-options'>
                    <h1>Learn Crypto</h1>
                    <p>Studying documentation to grasp technical concepts and engaging 
                        in conversation with AI for practical insights and guidance  with
                         real-world application.</p>
                         <button class="getstart-practice">Get started</button>
                </div>
                <div className='getstarted-options'>
                   <h1>Check Progress</h1>
                   <p>Checking progress in crypto entails reviewing transaction history for
                     insights and receiving relevant advice to improve overall performance.</p>
                     <button class="getstart-practice">Get started</button>
                </div>
                </div>
                 {/* <div className='giphy-embed'></div> */}
                
    </div>
    <Footer />
    </div>
    

  
);
}

export default Home;
