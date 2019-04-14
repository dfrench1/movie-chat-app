import { combineReducers } from 'redux'
import userReducer from './user'
import messageReducer from './messages'
import chatReducer from './openChat'
import langReducer from './lang'

const rootReducer = combineReducers({
    user: userReducer,
    messages: messageReducer,
    openChat: chatReducer,
    lang: langReducer
})


export default rootReducer