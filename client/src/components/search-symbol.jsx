import React, { useEffect, useRef, memo } from 'react';

function SearchSymbol() {
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
          "disabled_features": [{"header_widget":false}, {'left_toolbar': false}],
          "height": "700",
          "header_widget": false,
          "left_toolbar": false,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "withdateranges": false,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": false,
          "hotlist": false,
          "calendar": false,
          "container_id": widgetId
        });
  
        container.current.appendChild(widgetDiv);
        container.current.appendChild(script);
      }
    }, []);

    return (
        <div 
          className="tradingview-widget-container" 
          ref={container} 
          style={{ marginTop: '20px', marginLeft: 'auto', marginBottom: '20px',marginRight: 'auto' }} 
        />
    );
  }
  
  export default memo(SearchSymbol);
  