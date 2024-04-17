import React, { useEffect, useRef, memo } from 'react';

function NewNews() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.type = 'text/javascript';

      script.innerHTML = JSON.stringify({
        "feedMode": "all_symbols",
        "isTransparent": true,
        "displayMode": "adaptive",
        "width": "1440",
        "height": "1080",
        "colorTheme": "dark",
        "locale": "en"
      });

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="news-container" style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '50px', marginTop: '50px'}}>
    <div 
      className="tradingview-widget-container" 
      ref={containerRef}
    />
    </div>
  );
}

export default memo(NewNews);
















  