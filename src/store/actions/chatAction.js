export const ADD_MESSAGE = "CHAT::ADD_MESSAGE"

export const addMessage = (chatId, message)=>({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: message,
    }
})