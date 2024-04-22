import React, { useEffect, useRef, memo } from 'react';

function Screener() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.async = true;
      script.type = 'text/javascript';

      const widgetId = "tradingview_" + Math.random().toString(36).substring(2, 15);

      script.innerHTML = JSON.stringify({
        "width": "80%",
        "height": "700",
        "defaultColumn": "overview",
        "defaultScreen": "most_capitalized",
        "showToolbar": true,
        "locale": "en",
        "market": "us",
        "colorTheme": "dark",
        "container_id": widgetId // Assigning widgetId to container_id
      });

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="tradingview-widget-container" 
      ref={containerRef}
      style={{ 
        marginTop: '20px', 
        marginBottom: '20px',
        width: '80%', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        display: 'flex',
        justifyContent: 'center', 
      }}
    />
  );
}

export default memo(Screener);
