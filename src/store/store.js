import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import profileReducer from './reducers/profileReducer'
import chatListReducer from './reducers/chatListReducer'
import chatReducer from './reducers/chatReducer'
import numbersReducer from './reducers/numbersReducer'


const persistConfig = {
    key: 'root',
    storage,
    blacklist: 'messages',
} 

const rootReducer = combineReducers({
    profile: profileReducer,
    chatList: chatListReducer,
    chat: chatReducer,
    numbers: numbersReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)
