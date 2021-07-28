import React from 'react';
import '../App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useHistory } from 'react-router'
import { Button } from '@material-ui/core'
import InputAddChat from './InputAddChat';



 const Home = (props) => {

    const {
        chats = [],
        currentChat,
        onCurrentChatChange,
        onAddChat,
        onRemoveChat,
    } = props
    const history = useHistory()

    const handleChatLinkClick = (chat) => {
        onCurrentChatChange(chat)
        history.push(`/chats/${chat.id}`)
    }

    return (

        <div className="chats">
            <List subheader={<p>Список чатов</p>}>

                {chats.map((chat) => (
                    <div className="chat-item"  key={chat.id}>
                        <ListItem
                            button
                            key={chat.id}
                            selected={chat.id === currentChat.id}
                            onClick={() => handleChatLinkClick(chat)}
                        >
                            {chat.name}
                        </ListItem>

                        <Button onClick={() => onRemoveChat(chat.id)}>
                            Удалить
                        </Button>
                    </div>
                ))}

            </List>

            <InputAddChat onSubmit={onAddChat} />

            
        </div >
    )


};

export default Home
