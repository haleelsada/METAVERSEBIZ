import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';
import { yellow } from '@mui/material/colors';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';


import '../styles/learn.css';

function Learn() {
  
  return (
    <div className='learn-container'>
      <Header />
      <TickerTape />
      <Navbar />
      <div className='learn-modules'>
        <div className='learn-modules-cont-1'>
          <div className='learn-modules-cont-1-1'>
            <div className='learn-modules-title-box'>
              <div className='learn-modules-title-icon'><SchoolRoundedIcon fontSize='large' sx={{ color: yellow[600] }}/></div> <div className='learn-modules-title-text'>Introduction to Stocks</div>
            </div>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/terms/s/stockmarket.asp" target="_blank" 
              className="learn-modules-cont-links"> The Stock Market </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/investing/082614/how-stock-market-works.asp" target="_blank" 
              className="learn-modules-cont-links"> How Does The Stock Market Work </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/basics/04/092404.asp" target="_blank" 
              className="learn-modules-cont-links">  Getting To Know The Stock Exchanges </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/ask/answers/108.asp" target="_blank" 
              className="learn-modules-cont-links">  How To Buy And Sell Stocks </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/investing/what-owning-stock-actually-means/" target="_blank" 
              className="learn-modules-cont-links">  What Owning A Stock Means </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/terms/p/pennystock.asp" target="_blank" 
              className="learn-modules-cont-links"> What Is A Penny Stock? </a>
              </div><br></br>
              
          </div>
          <div className='learn-modules-cont-1-2'>
          <div className='learn-modules-title-box'>
              <div className='learn-modules-title-icon'><QueryStatsRoundedIcon fontSize='large' sx={{ color: yellow[600] }}/></div> <div className='learn-modules-title-text'>Stock Trading Basics</div>
            </div>
          <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/stocks/10/when-to-sell-stocks.asp" target="_blank" 
              className="learn-modules-cont-links">  When To Sell A Stock </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/ask/answers/12/difference-investing-trading.asp" target="_blank" 
              className="learn-modules-cont-links">  Investing Vs Trading </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/investing/080113/income-value-and-growth-stocks.asp" target="_blank" 
              className="learn-modules-cont-links">  Income, Value, And Growth Stocks </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/terms/s/shortselling.asp" target="_blank" 
              className="learn-modules-cont-links">  Short Selling </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/investing/basics-trading-stock-know-your-orders/" target="_blank" 
              className="learn-modules-cont-links">  Basics Of Order Types </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/ask/answers/073015/how-do-i-place-order-buy-or-sell-shares.asp" target="_blank" 
              className="learn-modules-cont-links">  Executing Trades </a>
              </div><br></br>
          </div>
        </div>
        <div className='learn-modules-cont-1'>
        <div className='learn-modules-cont-3'>
        <div className='learn-modules-title-box'>
              <div className='learn-modules-title-icon'><BalanceRoundedIcon fontSize='large' sx={{ color: yellow[600] }}/></div> <div className='learn-modules-title-text'>Managing a Portfolio</div>
            </div>
        <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/basics/11/3-s-simple-investing.asp" target="_blank" 
              className="learn-modules-cont-links">  Investing: An Introduction </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/ask/answers/062215/how-do-i-calculate-my-portfolios-investment-returns-and-performance.asp" target="_blank" 
              className="learn-modules-cont-links">   Measuring Investment Returns </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/investing/importance-diversification/" target="_blank" 
              className="learn-modules-cont-links">  Diversification </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/terms/e/etf.asp" target="_blank" 
              className="learn-modules-cont-links">  What Is An ETF? </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/pf/07/risk_tolerance.asp" target="_blank" 
              className="learn-modules-cont-links">  Understanding Risk Tolerance </a>
              </div><br></br>
        </div>
        </div>
        <div className='learn-modules-cont-1'>
          <div className='learn-modules-cont-1-1'>
          <div className='learn-modules-title-box'>
              <div className='learn-modules-title-icon'><MenuBookRoundedIcon fontSize='large' sx={{ color: yellow[600] }}/></div> <div className='learn-modules-title-text'>Stock Research</div>
            </div>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/fundamental/03/022603.asp" target="_blank" 
              className="learn-modules-cont-links">  Stock Fundamentals </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/basics/09/become-your-own-stock-analyst.asp" target="_blank" 
              className="learn-modules-cont-links"> How To Become Your Own Stock Analyst </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/financial-edge/0411/5-essential-things-you-need-to-know-about-every-stock-you-buy.aspx" target="_blank" 
              className="learn-modules-cont-links">   Essentials Of Analyzing Stocks </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/terms/f/fundamentalanalysis.asp" target="_blank" 
              className="learn-modules-cont-links">   Fundamental Analysis </a>
              </div><br></br>
          </div>
          <div className='learn-modules-cont-1-2'>
          <div className='learn-modules-title-box'>
              <div className='learn-modules-title-icon'><TrendingUpRoundedIcon fontSize='large' sx={{ color: yellow[600] }}/></div> <div className='learn-modules-title-text'>Introduction to Options</div>
            </div>
          <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/terms/o/option.asp" target="_blank" 
              className="learn-modules-cont-links">  What Is An Option? </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/options-basics-tutorial-4583012" target="_blank" 
              className="learn-modules-cont-links">  Essential Options Trading Guide </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/optioninvestor/09/buying-options.asp" target="_blank" 
              className="learn-modules-cont-links">   Basics Of Option Prices </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/active-trading/091714/basics-options-profitability.asp" target="_blank" 
              className="learn-modules-cont-links">  Basics Of Options Profitability </a>
              </div><br></br>
          </div>
        </div>
        <div className='learn-modules-cont-1'>
        <div className='learn-modules-cont-3'>
        <div className='learn-modules-title-box'>
              <div className='learn-modules-title-icon'><CurrencyExchangeRoundedIcon fontSize='large' sx={{ color: yellow[600] }}/></div> <div className='learn-modules-title-text'>Options Strategies</div>
            </div>
        <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/articles/active-trading/040915/guide-option-trading-strategies-beginners.asp" target="_blank" 
              className="learn-modules-cont-links">   Beginner Options Trading Strategies </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/trading/options-strategies/" target="_blank" 
              className="learn-modules-cont-links">   10 Options Strategies To Know </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/ask/answers/042215/whats-difference-between-credit-spread-and-debt-spread.asp" target="_blank" 
              className="learn-modules-cont-links">  Credit Spreads And Debit Spreads </a>
              </div><br></br>
              <div className="learn-modules-cont-links-caption">
              <a href="https://www.investopedia.com/terms/c/coveredcall.asp" target="_blank" 
              className="learn-modules-cont-links">   Covered Call </a>
              </div><br></br>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
