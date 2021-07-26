import React from 'react';
import './App.css';
import { ChatList } from './components/chatList';
import { listChats } from './constants/consts';
import { PersonChat } from './components/chat'




function App() {
  

  return (

    <div className="app">
      
      <div className="chats">
        {/* <ul>
          <li key="1"><button className="button-chat">Чат 1</button></li>
          <li key="2"><button className="button-chat">Чат 2</button></li>
          <li key="3"><button className="button-chat">Чат 3</button></li>
          <li key="4"><button className="button-chat">Чат 4</button></li>
        </ul> */}
        <div className="chats-versin2">
          <ChatList items={listChats} />
        </div>
      </div>

      <PersonChat />
      

    </div >


  )
};

export default App;


