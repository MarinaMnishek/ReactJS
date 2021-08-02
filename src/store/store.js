import { combineReducers, createStore } from "redux";
import profileReducer from './reducers/profileReducer'
import chatListReducer from './reducers/chatListReducer'
import chatReducer from './reducers/chatReducer'


const rootReducer = combineReducers({
    profile: profileReducer,
    chatList: chatListReducer,
    chat: chatReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)