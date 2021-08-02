import { CHAT_LIST, DELETE_CHAT } from "../actions/chatListAction"



const initialState = {
    chat1: { id: 'chat1', name: 'Чат 1' },
    chat2: { id: 'chat2', name: 'Чат 2' },
    chat3: { id: 'chat3', name: 'Чат 3' },


}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHAT_LIST:
            return {
                ...state,
                [action.payload.id]: action.payload,
            }
        case DELETE_CHAT:
            delete state[action.payload.chatId]
            return {
                ...state,

            }




        default:
            return state
    }
}