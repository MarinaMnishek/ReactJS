import { AUTHORS } from "../../constants/consts"
import uuid from 'react-uuid'

export const ADD_MESSAGE = "CHAT::ADD_MESSAGE"


export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: message,
    }
})

export const addMessageWithThunk = (chatId, message) => {
    return (dispatch, getState) => {
        dispatch(addMessage(chatId, message))
        if (message.author !== AUTHORS.BOT) {
            setTimeout(() => {
                dispatch(
                    addMessage(chatId, {
                        id: uuid(),
                        author: AUTHORS.BOT,
                        text: 'Сообщение обработано',
                    })
                )
            }, 1500)
        }
    }
}