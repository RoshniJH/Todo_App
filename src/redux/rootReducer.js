import { combineReducers } from "redux";
import { operationsReducer } from './todoApp/reducers/TodoOperations'

export const rootReducer = combineReducers({
    operationsReducer,
    // more reducers can be added here
})