import firebase from 'firebase'
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

export const createChatListInDatabase = (chatId, name) => {
    return () => {
        firebase.database().ref('chats').child(chatId).push({ id: chatId, name })
    }
}

export const deleteChatListFromDatabase = (chatId) => {
    return async (dispatch) => {
        try {
            await firebase.database().ref('chats').child(chatId).remove()
            dispatch(deleteChatList(chatId))
        } catch (error) {
            console.error(error.message)
        }
    }
}

export const addChatListWithFirebase = () => {
    return (dispatch, getState) => {
        firebase.database().ref('chats').on('child_added', (snapshot)=>{
            const { id: chatId, name } = Object.values(snapshot.val())[0]
            dispatch(createChatList(chatId, name))
        })

        firebase.database().ref('chats').on('child_changed', (snapshot)=>{
            const { id: chatId, name } = Object.values(snapshot.val())[0]
            dispatch(createChatList(chatId, name))
        })
    }
}