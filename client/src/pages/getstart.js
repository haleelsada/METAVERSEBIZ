import React, { useEffect, useRef, memo } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Getstart() {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;

      const widgetDiv = document.createElement("div");
      const widgetId = "tradingview_" + Math.random().toString(36).substring(2, 15);
      widgetDiv.id = widgetId;
      
      script.innerHTML = JSON.stringify({
        "width": "80%",
        "height": "700",
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "withdateranges": true,
        "hide_side_toolbar": true,
        "allow_symbol_change": true,
        "details": true,
        "hotlist": true,
        "calendar": false,
        "container_id": widgetId
      });

      container.current.appendChild(widgetDiv);
      container.current.appendChild(script);
    }
  }, []);

  // Inline style adjusted for specific top and left margins
  return (
    <div className='getstart-container'>
      <Header />
      <div 
        className="tradingview-widget-container" 
        ref={container} 
        style={{ marginTop: '20px', marginLeft: 'auto', marginBottom: '20px',marginRight: 'auto' }} 
      />
      <Footer />
    </div>
  );
}

export default memo(Getstart);
