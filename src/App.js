import React, { useState, useEffect } from 'react';

import './App.css';




function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({});


  const handleCLick = () => {
    setMessages([...messages, newMessage]);
    setNewMessage({ name: '', text: '' });

  }
  
  useEffect(() => {
    setTimeout(() => {
      console.log('Сообщение обработано');
    }, 1500);
  }, [messages])


  return (
    <section className="chat">
      <div className="autor-input">
        <input
          placeholder="Enter your name"
          value={newMessage.name || ''}
          onChange={e => setNewMessage({ ...newMessage, name: e.target.value })}
        />
      </div>
      <div>
        <input
          placeholder="Enter your message"
          value={newMessage.text || ''}
          onChange={e => setNewMessage({ ...newMessage, text: e.target.value })}
        />
      </div>
      <button onClick={handleCLick}>SEND</button>
      <h2>Chat:</h2>
      {
        messages.map(
          (item) => (
            <div key={item.text}>
              <p><span>{item.name}: </span> {item.text}</p>
            </div>
          )
        )
      }
    </section>
  )
};

export default App;


