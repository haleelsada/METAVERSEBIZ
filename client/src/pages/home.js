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
        <div className='home-tutorial-1'>
            <div className='home-tutorial-1-contents'>
                <div className='home-tutorial-1-des'>
                    <h1>Be a tycoon</h1>
                    <p>Build your own company from the ground up. Find and exploit<br></br>gaps in the market and compete against other players.</p>
                    <h1>Free to play</h1>
                    <p>MetaverseBiz is free to play for everyone! Gain valuable<br></br>business skills for free :)</p>
                    <h1>Economy simulation</h1>
                    <p>An advanced, proprietary, <a href ="/economic-stimulation-model">Economy simulation model</a> is used<br></br>
                        to deliver the best gaming experience. Form cartels, influence<br></br>
                        prices! There is no limits to what you can do.</p>
                    <a href="/play">
                        <button className='home-play-button'>
                        <div className='cntr'>
                                    <span>Start Playing</span>
                                </div>
                        </button>
                    </a>    
                </div>
                <div>
                <img src ="business-woman-1.png" id="business-woman" alt="business-woman"/>
                </div>
            </div>
        </div>
        <div className='home-tutorial-2'>
            <div className='home-tutorial-2-contents'>
                <div>
                <div>
                    <img src ="farm-lvl1.png" id="farm" alt="farm-lvl-1"/>
                </div>
                <div>
                <img src ="factory-lvl1.png" id="factory" alt="factory-lvl-1"/>
                </div>
                </div>
            <div className='home-tutorial-2-des'>
                <h1>Have you ever wondered what it would be like to build<br></br>your own company, to be a tycoon?</h1>
                <p>Do you want to measure your skills against other players in a virtual economy?Do you want to own a production,<br></br>
                    retail or research company which pays out the best? It all depends on the current conditions in the virtual<br></br>
                    economy and how skillful you are in spotting business opportunities. MetaverseBiz is an extremely versatile <br></br>
                    browser game that allows you to experiment with various resources and test your skills against other<br></br>
                    players in the game. MetaverseBiz is a business simulation strategy game aimed at giving you the fun and<br></br>
                    experience of managing a company using real world economic principles. The goal of the game is to create<br></br>
                    a profitable and competitive business. Each player receives a starting capital and few assets. Players'<br></br>
                    day-to-day tasks consist of managing the resource supply chain, from production to selling in retail,<br></br>
                    retail, procuring business partners, ensuring financing, etc. For players to prosper, they would have to be<br></br>
                    able to read market conditions and take some trading shortcuts here and there, maybe buy their input<br></br>
                    resources on market cheaper than if they produced them or sell them on the market with higher profit than<br></br>
                    in the retail. When should players invest into research? We thought about what makes company management fun<br></br>
                    and what makes it tedious. MetaverseBiz'philosophy is to let you take the interesting decisions while<br></br>
                    building your own business without having to fill in tons of extra settings. We do not want to simulate<br></br>
                    the real world with all its law and other restrictions, but rather give players the freedom to make<br></br>
                    decisions that can impact their company finances and value.</p>
                <a href="/play">
                    <button className='home-play-button'>
                    <div className='cntr'>
                                <span>Start Playing</span>
                            </div>
                    </button>
                </a>
                <a href="/guide">
                        <button className='home-play-button'>
                        <div className='cntr'>
                                    <span>Guide for Beginners</span>
                                </div>
                        </button>
                </a>   
            </div>
            </div>
        </div>
        {/* <div className='home-tutorial-3'>

        </div> */}
    <Footer />
  </div>
)
}

export default Home;
