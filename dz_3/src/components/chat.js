import React, { useState, useEffect } from 'react';
import '../App.css';
import { AUTHORS } from '../constants/consts';
import Input from './Input';
import { Redirect, useParams } from 'react-router'


function Message(props) {
    return <p><span>{props.author}:</span> {props.text}</p>
}


export const PersonChat = (props) => {

    const { getIsChatExists } = props
    
    const { chatId } = useParams()

    const [messages, setMessages] = useState([]);
   

    const handleMessageSubmit = (newMessageText) => {
        setMessages((currentMessageList) => [
            ...currentMessageList,
            { author: AUTHORS.ME, text: newMessageText },
        ])
    }


    useEffect(() => {
        if (messages.length && messages[messages.length - 1].author !== AUTHORS.BOT) {
            setTimeout(() => {
                setMessages((currentMessages) => [...currentMessages, { author: AUTHORS.BOT, text: "Сообщение обработано" }])

            }, 1500)
        }
    }, [messages])

    const isChatExists = React.useMemo(
        () => getIsChatExists(chatId),
        [getIsChatExists, chatId]
    )

    if (!isChatExists) {
        return <Redirect to="/chats" />
    }

    return (

        <div className="chat__sendMessage">
            
        <Input onSubmit={handleMessageSubmit}/>

            <div>
                {messages.map((msg, index) => (
                    <Message
                        key={index}
                        text={msg.text}
                        author={msg.author}
                    />
                ))
                }
            </div>
        </div>
    )


};

