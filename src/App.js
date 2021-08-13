import React from 'react';
import './App.css';
import Router from './components/Router'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { changeIsAuthed } from './store/actions/profileAction'

function App() {

 

  const dispatch = useDispatch()

  React.useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch(changeIsAuthed(true))
        } else {
          dispatch(changeIsAuthed(false))
        }
      })
  }, [])


  const handleSignOut = (e) => {
    e.preventDefault()

    firebase.auth().signOut()
}

  return (

    <div className="app">
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/chats">Chats </Link>
        <Link to="/profile">Profile</Link>
        <Link to="/someAPI">Try to work with API</Link>
        <Link to="/numbers">Numbers</Link>
        <Link to="/login">Login</Link>
        <button className="button-signout" onClick={handleSignOut}>
                    Sign out
                </button>
      </div>

      <Router
        
      />

    </div >


  )
};

export default App;


