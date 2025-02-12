import React, { useState } from 'react';

function App() {
  const [userMessage, setUserMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const result = await fetch('http://127.0.0.1:8000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await result.json();
    setResponse(data.message);
  };

  return (
    <div className="App">
      <h1>Yapay Zeka ile Sohbet</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={userMessage}
          onChange={handleMessageChange}
          placeholder="Bir şeyler yazın..."
        />
        <button type="submit">Gönder</button>
      </form>
      <div>
        <h2>Yanıt:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
