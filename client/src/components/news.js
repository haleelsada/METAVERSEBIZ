import axios from 'axios';
import { useEffect, useState } from 'react';
import './news.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function News() {
  const [newsData, setNewsData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // Make API call to news API
  async function getNewsData() {
    // Set loading boolean to true so that we know to show loading text
    setLoading(true);

    try {
      // Make news API call using axios
      const resp = await axios.get("https://newsapi.org/v2/everything?q=stock%20market&apiKey=b738ed2669c54125aae96fba7c1107d5&pageSize=51");
      setNewsData(resp.data.articles);
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      // Set loading boolean to false so that we know to show news articles
      setLoading(false);
    }
  }

  useEffect(() => {
    getNewsData();
  }, []);

  return (   
    <Container className="mt-5" style={{display:'flex', margin: '0px auto'}}>
      <div className="news-container" style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: '0px'}}>
        {newsData.map((news, index) => (
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <Card className="h-100 mb-3" style={{width: '500px', marginBottom: '50px'}}>
                <div className='news-card'>
                <Card.Img  className="news-card-img" variant="top" src={news.urlToImage} />
                <Card.Body className="news-card-body">
                  <Card.Title className='news-card-title'>{news.title}</Card.Title>
                </Card.Body>
                </div>
              </Card>
            </a>
        ))}
      </div>
    </Container>
  );
}

export default News;
