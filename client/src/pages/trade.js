import React, {useEffect, useState} from 'react'
import '../styles/trade.css';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Trade() {
  const [transaction_name, setTransactionName] = useState("");
  const [price, setPrice] = useState("");
  const [no_of_stocks, setNoOfStocks] = useState("");
  const [details, setDetails] = useState("");
  const [user_id, setUserId] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  


  async function placeOrder(e) {
    e.preventDefault();
   
    let item = {transaction_name, price, no_of_stocks,details,user_id}
    let response = await fetch("http://127.0.0.1:8000/transaction", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(item)
    });
    let result = await response.json();
    console.log(result);
    
    if (response.status === 200) {
      const transactionData = result.transaction_data;
      Swal.fire({
        text: "Transaction successful" + item,
        icon: "success"
      });
      
      //  navigate ("/");
    } else {
        setErrorMessage(result.error);
    }
}

  return (
    <div className='trade-bg'>
     <Header />
      <TickerTape />
      <Navbar />
      <div className='trade-container'>
        <h1 className='trade-title'>Buy or Sell Stocks</h1>
        <div className='trade-form-box'>
        <form onSubmit={e => placeOrder(e)}>
        <div className='trade-user-box'>
        <label htmlFor='user' className='trade-user-label'>User id</label>
        <input type='text' name='user' required  value={user_id} onChange={e => setUserId(e.target.value)} className='trade-user-input'></input>
        </div>
        <div className='trade-search-box'>
        <label htmlFor='transaction-name' className='trade-search-label'>stocks Name</label>
        <input type='text' name='transaction-name'value={transaction_name} onChange={e => setTransactionName(e.target.value)} required className='trade-search-input'></input>
        </div>
        <div className='trade-stocks-box'>
        <label htmlFor='stocks' className='trade-stocks-label'>No of stocks</label>
        <input type='text' name='stocks' required  value={no_of_stocks} onChange={e => setNoOfStocks(e.target.value)} className='trade-stocks-input'></input>
        </div>
        <div className='trade-price-box'>
        <label htmlFor='price' className='trade-price-label'>Price</label>
        <input type='text' name='price' required  value={price} onChange={e => setPrice(e.target.value)} className='trade-price-input'></input>
        </div>
        <div className='trade-action-box'>
        <select className='trade-action-options' value={details} onChange={e => setDetails(e.target.value)}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
          </select>
        </div>
        <div className='trade-clear-box'>
        <button type="reset" className='trade-clear'>Clear</button>
        </div>
        <div className='trade-order-box'>
        <button type='submit' className='trade-order'>Place order</button>
        </div>
        <div>{errorMessage && <div className="error" style={{ color: '#ed4337', marginLeft: '125px', marginTop: '10px'}}>{errorMessage}</div>}</div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Trade;
