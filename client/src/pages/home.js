import React from 'react'
import '../styles/home.css';
import Header from '../components/header';
import Footer from '../components/footer'; 

function Home () {

  return (
  <div className='home-cont'>
    <Header />
    <div className="home-bg">
        <div className='home-contents'>
            <h1 className='home-contents-title'>Become<br></br>an Economic Czar</h1>
            <h2 className='home-contents-subtitle'>Build your own company from the ground up.<br></br>Interested?</h2>
            <a href="/play">
                <button className='home-play-button'>
                <div className='cntr'>
                            <span>Start Playing</span>
                        </div>
                </button>
                </a>
            <a href="/signin">
                <button className='home-signin-button'>
                <div className='cntr'>
                            <span>Sign In</span>
                        </div>
                </button>
                </a>
            <p className='home-contents-des'>MetaverseBiz is free to play for everyone!<br></br>
                Gain valuable business skills for free.<br></br>
                Delivering the best gaming experience.</p>    
        </div>
    </div>
    <Footer />
  </div>
)
}

export default Home;
