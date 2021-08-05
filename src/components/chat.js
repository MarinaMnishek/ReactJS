import React from 'react';
// import { useEffect } from 'react';
import '../App.css';
// import { AUTHORS } from '../constants/consts';
import Input from './Input';
// import { Redirect } from 'react-router'
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
// import { addMessage } from '../store/actions/chatAction';
import { addMessageWithThunk } from '../store/actions/chatAction';
import uuid from 'react-uuid'

function Message(props) {
    return <p><span>{props.author}:</span> {props.text}</p>
}


export const PersonChat = (props) => {

    const { chatId } = useParams()
    const messageList = useSelector((state) => state.chat[chatId] || [])
    const { name,  nikName } = useSelector((state) => state.profile)
    const dispatch = useDispatch()

   
    const handleAddMessage = (newMessage) => {
        dispatch(
            addMessageWithThunk(chatId, {
                id: uuid(),
                author: `${name} ( ${nikName} )`,
                text: newMessage,
            })
        )
    }


//_______________________________________________________________________________

    // const { getIsChatExists } = props

    // const [messages, setMessages] = useState([]);

    // const handleMessageSubmit = (newMessageText) => {
    //     setMessages((currentMessageList) => [
    //         ...currentMessageList,
    //         { author: `${name} ( ${nikName} )`, text: newMessageText },
    //     ])
    // }

    // useEffect(() => {
    //     if (messages.length && messages[messages.length - 1].author !== AUTHORS.BOT) {
    //         setTimeout(() => {
    //             setMessages((currentMessages) => [...currentMessages, { author: AUTHORS.BOT, text: "Сообщение обработано" }])

    //         }, 1500)
    //     }
    // }, [messages])

    // const isChatExists = React.useMemo(
    //     () => getIsChatExists(chatId),
    //     [getIsChatExists, chatId]
    // )

    // if (!isChatExists) {
    //     return <Redirect to="/chats" />
    // }

    return (

        <div className="chat__sendMessage">

            <Input onSubmit={handleAddMessage} />
            {
                <div>
                    {messageList.map((msg, i) => (

                        <Message
                            // key={msg.toString()}
                            key={i}
                            text={msg.text}
                            author={msg.author}
                        />
                    ))
                    }

                </div>}
        </div>
    )


};

