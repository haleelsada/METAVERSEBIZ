import React, { useEffect, useState, useRef } from 'react';
import '../styles/help.css';
import Header from '../components/header';
import Navbar from '../components/navbar';
import TickerTape from '../components/ticker-tape';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Help() {
  const containerRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [history, setHistory] = useState(() => {
    // Initialize history from localStorage or set to an empty array
    const storedHistory = localStorage.getItem('helpHistory');
    return storedHistory ? JSON.parse(storedHistory) : [];
  });
  
  useEffect(() => {
    // Save history to localStorage whenever it changes
    localStorage.setItem('helpHistory', JSON.stringify(history));
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [history]);

  async function submitQuestion(e) {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);
    console.log(myHeaders)
    let item = JSON.stringify({question});
    const formdata = new FormData();
    formdata.append("question", item);
    let response = await fetch('http://127.0.0.1:8000/chat', {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
    });
    let result = await response.json();
    console.log(result);

    if (response.status === 200) {
      const updatedHistory = [...history, { question, answer: result.Response }];
      setHistory(updatedHistory);
      setAnswer(result.Response);
      setQuestion(''); // Clear the question input
    } else {
      setErrorMessage(result.error);
    }
  }

  return (
    <div className='help-bg'>
      <Header />
      <TickerTape />
      <Navbar />
      <div className='help-container'>
        <div className='help-answer-box' ref={containerRef}>
          {history.map((qa, index) => (
            <div className='trade-chat-display' key={index}>
              <div>
              <div className='trade-question-display'>
              <div style={{ color: '#00ffff', marginBottom: "10px"}}>User</div>{qa.question}
              </div>
              <div className='trade-answer-display'>
              <div style={{ color: '#ff00ff', marginBottom: "10px"}}>Dotstock AI</div>{qa.answer}
              </div>
              </div>
            </div>
          ))}
          </div>
          <div className='help-question-bg'>
          <div className='help-question-box'>
          <form onSubmit={e => submitQuestion(e)}>
          <div className='help-question-input'>
            <input type='text' placeholder='Message Dotstock AI' name='question' required value={question} onChange={e => setQuestion(e.target.value)} className='help-question'></input>
            <button type='submit' className='help-question-button'>&#10148;</button>
          </div>
          </form>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Help;
