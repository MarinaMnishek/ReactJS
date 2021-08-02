import React from 'react';
import './App.css';
import Router from './components/Router'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux';


function App() {

  // const  chatList  = useSelector((state) => state.chatList)


  // const [chats, setChats] = useState([
  //   { id: 'chat1', name: 'Чат 1' },
  //   { id: 'chat2', name: 'Чат 2' },
  //   { id: 'chat3', name: 'Чат 3' },
  // ])
  // const [currentChat, setCurrentChat] = useState(chatList[0])

  // const handleChangeChat = (chat) => setCurrentChat(chat)

  // const handleAddChat = (chatName) => {
  //   setChats((currentChats) => [
  //     ...currentChats,
  //     { name: chatName, id: `chat${Date.now()}` },
  //   ])
  // }

  // const handleRemoveChat = (chatId) => {
  //   setChats((currentChats) =>
  //     currentChats.filter((chat) => chat.id !== chatId)
  //   )
  // }

  // const handleIsChatExists = React.useCallback(
  //   (chatId) => {
  //     return Boolean(chats.find((chat) => chat.id === chatId))
  //   },
  //   [chats]
  // )


  return (

    <div className="app">
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/chats">Chats </Link>
        <Link to="/profile">Profile</Link>
      </div>

      <Router
        // chats={chats}
        // currentChat={currentChat}
        // onCurrentChatChange={handleChangeChat}
        // getIsChatExists={handleIsChatExists}
        // onAddChat={handleAddChat}
        // onRemoveChat={handleRemoveChat}
      />

    </div >


  )
};

export default App;


