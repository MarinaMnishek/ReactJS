import { ADD_MESSAGE } from "../actions/chatAction";
import { AUTHORS } from "../../constants/consts";

const initialState = {
    // chat1: [
    //     { id: 'message1', text: 'Привет', author: AUTHORS.ME },
    //     { id: 'message2', text: 'Привет!', author: AUTHORS.BOT },
    // ],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {

            return {
                ...state,
                [action.payload.chatId]: [
                    ...(state[action.payload.chatId] || []),
                    action.payload.message,
                ],

            }
        }
        default:
            return state
    }
}