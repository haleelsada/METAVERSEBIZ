import React, { useEffect, useRef, memo } from 'react';

function TickerTape() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.type = 'text/javascript';

      script.innerHTML = JSON.stringify({
        "symbols": [
            {
              "proName": "FOREXCOM:SPXUSD",
              "title": "S&P 500 Index"
            },
            {
              "proName": "FOREXCOM:NSXUSD",
              "title": "US 100 Cash CFD"
            },
            {
              "proName": "FX_IDC:EURUSD",
              "title": "EUR to USD"
            },
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            }
          ],
          "showSymbolLogo": true,
          "displayMode": "adaptive",
          "colorTheme": "dark",
          "isTransparent": true,
          "locale": "en"
      });

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="tradingview-widget-container" 
      ref={containerRef}
    />
  );
}

export default memo(TickerTape);

