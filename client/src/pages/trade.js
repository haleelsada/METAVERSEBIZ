import React, {useState} from 'react';
import '../styles/trade.css';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Trade() {
  const MySwal = withReactContent(Swal);
  const [transaction_name, setTransactionName] = useState("");
  const [price, setPrice] = useState("");
  const [movement, setMovement] = useState("");
  const [no_of_stocks, setNoOfStocks] = useState("");
  const [details, setDetails] = useState("buy");
  const [errorMessage, setErrorMessage] = useState('');
  const [errorSearch, setErrorSearch] = useState('');
  const [itemClicked, setItemClicked] = useState(false);
  const [predictionOutput, setPredictionOutput] = useState('');
  const [searchOutput, setSearchOutput] = useState({
    name: '',
    id: '',
    price:'' ,
    movement: '',
  });

  async function performSearch(value) { 
    let response = await fetch(`http://127.0.0.1:8000/search/${value}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    });
    let result = await response.json();
    console.log(result);
    
    if (response.status === 200) {
      setSearchOutput(result.Response)     
      //  navigate ("/");
    } else {
        setErrorSearch(result.error);
    }
}
async function hintProvider(e) { 
  let response = await fetch(`http://127.0.0.1:8000/prediction/${e}`, {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
  });
  let result = await response.json();
  console.log(result);
  
  if (response.status === 200) {
    setPredictionOutput(result.Response)     
    //  navigate ("/");
  } else {
      setPredictionOutput(result.error);
  }
}

  function handleInputChange(e) {
    const { value } = e.target;
    setTransactionName(value); 
    setPredictionOutput('');
    performSearch(value); 
  }

  function handleQuestionChange(e) {
    const { value } = e.target;
    setTransactionName(value); 
    handleInputChange(e); 
  }
  function handleSearchItemClick(item) {
    setTransactionName(item.name);
    setPrice(item.price)
    setMovement(item.movement)
    setItemClicked(true);
    hintProvider(item.id);
  }
  async function placeOrder(e) {
    e.preventDefault();
    let new_price = parseInt(price.slice(1).replace(",", ""))
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
    console.log(details)
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);
    console.log(myHeaders)
    const formdata = new FormData();
    formdata.append("no_of_stocks", no_of_stocks);
    formdata.append("price", new_price);
    formdata.append("details", details);
    formdata.append("transaction_name", transaction_name);
    let response = await fetch("http://127.0.0.1:8000/transaction", {
        method: 'POST',
        headers: myHeaders,
        body: formdata
    });
    let result = await response.json();
    console.log(result);
    
    if (response.status === 200) {
      MySwal.fire({
        text: result.response,
        icon: "success"
      });
      
      //  navigate ("/");
    } else {
      MySwal.fire({
        text: result.response,
        icon: "error"
      });
    }
}

  return (
    <div className='trade-bg'>
     <Header />
      <TickerTape />
      <Navbar />
      <div className='trade-title' style={{marginLeft: '9vw',marginTop: '50px', color: '#ffffff', fontSize: '20px', 
        fontWeight: '600'}}>Buy or Sell Stocks</div>
      <div className='trade-container'>
        <div className='trade-form-box'>
        <form onSubmit={e => placeOrder(e)}>
        <div className='trade-search-and-result'>
        <div className='trade-search-box'>
        <label htmlFor='transaction-name' className='trade-search-label'>Stocks</label><br></br><br></br>
        <input type='text' name='transaction-name' value={transaction_name} onChange={handleQuestionChange} placeholder='Search stocks here &#128269;' required className='trade-search-input'></input>
        </div>
        </div>
        {(transaction_name && !itemClicked) && (
        <div className='trade-search-display'>
          {Array.isArray(searchOutput) ? (
            searchOutput.map(item => (
              <div key={item.id} className="trade-search-result" onClick={() => handleSearchItemClick(item)}>
                {/* <p>Name: {item.name}</p> */}
                <p>{item.id} <span style={{ color: item.movement.startsWith("-") ? "#f2282b" : "#22ab94",marginLeft: "5px" }}> 
                {item.movement.startsWith("-") ? <span> &#8681; </span> : <span> &#8679; </span>} ({item.movement}) </span></p>
                {/* <p>Price: {item.price}</p> */}
                {/* <p>Movement: {item.movement}</p> */}
              </div>
            ))
          ) : (
            <div>{errorSearch && <div className="trade-search-error">{errorSearch}</div>}</div>
          )}
        </div>)}
        {(transaction_name && itemClicked) && (
        <div>{predictionOutput && <div className="error" style={{ color: predictionOutput.startsWith("Be") ? "#f2282b" : "#22ab94", marginLeft: '50px', marginTop: '10px'}}>
          {predictionOutput} {predictionOutput.startsWith("Be") ? <span> &#8681; </span> : <span> &#8679; </span>}</div>}
        </div>)}
        <div className='trade-user-and-price'> 
        <div className='trade-user-box'>
        <label htmlFor='user' className='trade-user-label'>Movement</label><br></br><br></br>
        <input type='text' name='user' required readOnly value={movement} onChange={e => setMovement(e.target.value)} className='trade-user-input'
        style={{ color: movement.startsWith("-") ? "#f2282b" : "#22ab94",marginLeft: "5px" }}></input>
        </div>
        <div className='trade-price-box'>
        <label htmlFor='price' className='trade-price-label'>Price</label><br></br><br></br>
        <input type='text' name='price' required readOnly value={price} onChange={e => setPrice(e.target.value)} className='trade-price-input'></input>
        </div>
        </div>
        <div className='trade-stocks-and-action'>
        <div className='trade-stocks-box'>
        <label htmlFor='stocks' className='trade-stocks-label'>Quantity</label><br></br><br></br>
        <input type='text' name='stocks' required  value={no_of_stocks} onChange={e => setNoOfStocks(e.target.value)} className='trade-stocks-input'></input>
        </div>
        <div className='trade-action-box'>
        <label htmlFor='action' className='trade-action-label'>Action</label><br></br><br></br>
        <select className='trade-action-options' name='action' value={details} onChange={e => setDetails(e.target.value)}>
        <option className='trade-action-options-list' value="buy">Buy</option>
        <option className='trade-action-options-list' value="sell">Sell</option>
        </select>

        </div>
        </div>
        <div className='trade-clear-and-order'>
        <div className='trade-clear-box'>
        <button type="reset" className='trade-clear'>Clear</button>
        </div>
        <div className='trade-order-box'>
        <button type='submit' className='trade-order'>Place order</button>
        </div>
        </div>
        <div>{errorMessage && <div className="error" style={{ color: '#ed4337', marginLeft: '125px', marginTop: '10px'}}>{errorMessage}</div>}</div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Trade;
