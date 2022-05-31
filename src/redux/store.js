import { combineReducers, createStore } from "redux"
import CityReducer from "./reducers/CityReducer"
import TabBarReducer from "./reducers/TabBarReducer"

const reducer = combineReducers({
  CityReducer,
  TabBarReducer
})

const store = createStore(reducer)

export default store
