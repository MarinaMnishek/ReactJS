import React from 'react';

function Message(props) {
    return <p><span>{props.author}:</span> {props.text}</p>
}


export default Message