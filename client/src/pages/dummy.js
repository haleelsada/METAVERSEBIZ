function Trade() {
    const [transaction_name, setTransactionName] = useState("");
    const [price, setPrice] = useState("");
    const [no_of_stocks, setNoOfStocks] = useState("");
    const [details, setDetails] = useState("");
    const [user_id, setUserId] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [errorSearch, setErrorSearch] = useState('');
    const [searchOutput, setSearchOutput] = useState({
      name: '',
      id: '',
      price:'' ,
      movement: '',
    });
    const [itemClicked, setItemClicked] = useState(false); // New state
  
    async function performSearch(value) {
      // Fetch search results
    }
  
    function handleInputChange(e) {
      // Handle input change
    }
  
    function handleQuestionChange(e) {
      // Handle question change
    }
  
    function handleSearchItemClick(item) {
      setItemClicked(true); // Set itemClicked to true when an item is clicked
      setPrice(item.price);
    }
  
    async function placeOrder(e) {
      // Handle placing order
    }
  
    return (
      <div className='trade-bg'>
        <Header />
        <TickerTape />
        <Navbar />
        <div className='trade-title' style={{marginLeft: '8vw',marginTop: '50px', color: '#ffffff', fontSize: '20px', fontWeight: '600'}}>Buy or Sell Stocks</div>
        <div className='trade-container'>
          <div className='trade-form-box'>
            <form onSubmit={e => placeOrder(e)}>
              <div className='trade-search-and-result'>
                <div className='trade-search-box'>
                  <label htmlFor='transaction-name' className='trade-search-label'>Search stocks</label><br /><br />
                  <input type='text' name='transaction-name' value={transaction_name} onChange={handleQuestionChange} required className='trade-search-input' />
                </div>
              </div>
              {(transaction_name && !itemClicked) && (
                <div className='trade-search-display'>
                  {Array.isArray(searchOutput) ? (
                    searchOutput.map(item => (
                      <div key={item.id} className="trade-search-result" onClick={() => handleSearchItemClick(item)}>
                        <p>{item.id}</p>
                      </div>
                    ))
                  ) : (
                    <div>{errorSearch && <div className="trade-search-error">{errorSearch}</div>}</div>
                  )}
                </div>
              )}
              {/* Rest of your form elements */}
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Trade;
  