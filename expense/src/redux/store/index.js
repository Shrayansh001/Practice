import { expenseReducer } from "../reducers/expenses"
import { createStore, combineReducers } from "redux"

const reducer = combineReducers({
    expenses: expenseReducer,
})
const initialState={}
const store = createStore(reducer, initialState)
export default store;