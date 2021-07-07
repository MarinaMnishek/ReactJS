import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
// import './App.css';
import { AUTHORS } from '../constants/consts';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    buttonSend: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 7,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginLeft: '30px',
    },
});

function Message(props) {
    return <p><span>{props.author}:</span> {props.text}</p>
}


export const PersonChat = () => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');


    const classes = useStyles();

    const handleMessageChange = (e) => {
        setNewMessage(e.target.value)
    }


    const handleMessageSubmit = (e) => {
        e.preventDefault()

        setMessages((currentMessages) => [...currentMessages, { author: AUTHORS.ME, text: newMessage }])
        setNewMessage('')
    }


    useEffect(() => {
        if (messages.length && messages[messages.length - 1].author !== AUTHORS.BOT) {
            setTimeout(() => {
                setMessages((currentMessages) => [...currentMessages, { author: AUTHORS.BOT, text: "Сообщение обработано" }])

            }, 1500)
        }
    }, [messages])

    return (

        <div>
            <form onSubmit={handleMessageSubmit}>
                <TextField
                    placeholder="Enter your message"
                    required
                    id="outlined-required"
                    label="Message"
                    variant="outlined"
                    value={newMessage}
                    onChange={handleMessageChange}
                />
                {/* <button className="button-send">SEND</button> */}
                <Button className={classes.buttonSend}>SEND</Button>
            </form>


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

