export const CHAT_LIST = "CHATS::CHAT_LIST"
export const DELETE_CHAT = "CHATS::DELETE_CHAT"


export const createChatList = (chatId, name) => ({
    type: CHAT_LIST,
    payload: {
        id: chatId,
        name: name,
    }
})

export const deleteChatList = (chatId) => ({
    type: DELETE_CHAT,
    payload: {
        chatId: chatId,
        
    }
})