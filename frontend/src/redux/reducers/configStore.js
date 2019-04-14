import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './index'
 
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user', 'messages', 'openChat', 'lang']
  };
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer, devToolsEnhancer())
  let persistor = persistStore(store)
  return { store, persistor }
}