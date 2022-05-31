import { combineReducers, createStore } from "redux"
import CityReducer from "./reducers/CityReducer"
import TabBarReducer from "./reducers/TabBarReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  CityReducer,
  TabBarReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
let persistor = persistStore(store)

export {store, persistor }
