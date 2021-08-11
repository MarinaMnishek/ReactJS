import { AUTHORS } from "../../constants/consts"
import uuid from 'react-uuid'
import firebase from 'firebase'

export const ADD_MESSAGE = "CHAT::ADD_MESSAGE"


export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: message,
    }
})

// export const addMessageWithThunk = (chatId, message) => {
//     return (dispatch, getState) => {
//         dispatch(addMessage(chatId, message))
//         if (message.author !== AUTHORS.BOT) {
//             setTimeout(() => {
//                 dispatch(
//                     addMessage(chatId, {
//                         id: uuid(),
//                         author: AUTHORS.BOT,
//                         text: 'Сообщение обработано',
//                     })
//                 )
//             }, 1500)
//         }
//     }
// }

export const addMessageFromBot = (chatId, message) => {
    return () => {
        firebase.database().ref('messages').child(chatId).push(message)
        if (message.author !== AUTHORS.BOT) {
            setTimeout(() => {
                firebase.database().ref('messages').child(chatId).push({
                    id: uuid(),
                    author: AUTHORS.BOT,
                    text: 'Сообщение обработано',
                    })
            }, 1500)
        }
    }
}

export const addMessageWithFirebase = (chatId) => {
    return (dispatch, getState) => {
        firebase.database().ref('messages').child(chatId).on('child_added', (snapshot)=>{
            dispatch(addMessage(chatId, snapshot.val()))
        })

        firebase.database().ref('messages').child(chatId).on('child_changed', (snapshot)=>{
            dispatch(addMessage(chatId, snapshot.val()))
        })
    }
}