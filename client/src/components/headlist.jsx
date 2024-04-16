import React from 'react'
import './headlist.css'
import { PiStudentFill } from "react-icons/pi";
import News from './news';
const Headlist = () => {

  return (
    <div class="container">

    <div class="tabs">
    <div class="tabby-tab">
        <input type="radio" id="tab-1" name="tabby-tabs" checked/>
        <label for="tab-1">PROFTFOLIO</label>
      
      </div>
      <div class="tabby-tab">
        <input type="radio" id="tab-1" name="tabby-tabs" checked/>
        <label for="tab-1">TRADE</label>
      
      </div>
  
      <div class="tabby-tab">
        <input type="radio" id="tab-2" name="tabby-tabs"/>
        <label for="tab-2">LEARN</label>
        <div class="tabby-content">
        <div className='block'>
          <div className='block-1'>
            <div className='block-head'>
              <div class="image" >
                <img src="https://i-n.investopedia.com/img/college-student.ff972c9.svg"/>
              </div>
              <h2>Introduction to Stocks</h2>
              </div>
              <div className='content'>
               <a href="https://www.investopedia.com/terms/s/stockmarket.asp" className='link'>The stock market</a><br/>
               <a href="https://www.investopedia.com/articles/investing/082614/how-stock-market-works.asp" className='link'>How does the stock market work</a><br/>
               <a href="https://www.investopedia.com/articles/basics/04/092404.asp" className='link'>Getting to know stock exchange</a><br/>
               <a href="https://www.investopedia.com/ask/answers/108.asp" className='link'>How to buy and cell stocks</a><br/>
                
              </div>
      
      

      </div>
      <div className='block-1'>
            <div className='block-head'>
              <div class="image" >
                <img src="https://i-n.investopedia.com/img/growth-investing.c169557.svg"/>
              </div>
              <h2>Stock Trading Basics</h2>
              </div>
              <div className='content'>
              <a href="https://www.investopedia.com/articles/stocks/10/when-to-sell-stocks.asp" className='link'>When to sell astock</a><br/>
               <a href="https://www.investopedia.com/ask/answers/12/difference-investing-trading.asp" className='link'>Investing vs trading</a><br/>
               <a href="https://www.investopedia.com/terms/s/shortselling.asp" className='link'>Short seling</a><br/>
               <a href="https://www.investopedia.com/investing/basics-trading-stock-know-your-orders/" className='link'>Basics of order types</a><br/>
                
              </div>
      
      

      </div>
      </div>
      </div>
        
        

        </div>
  
      <div class="tabby-tab">
        <input type="radio" id="tab-3" name="tabby-tabs"/>
        <label for="tab-3">RESEARCH</label>
        

      </div>
  
      
      
    </div>
    </div>
  )
}
export default Headlist