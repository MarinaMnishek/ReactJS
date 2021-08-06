import React from 'react';
import './App.css';
import Router from './components/Router'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux';


function App() {

  // const  chatList  = useSelector((state) => state.chatList)




  return (

    <div className="app">
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/chats">Chats </Link>
        <Link to="/profile">Profile</Link>
        <Link to="/someAPI">Try to work with API</Link>
        <Link to="/numbers">Numbers</Link>
      </div>

      <Router
        
      />

    </div >


  )
};

export default App;


