import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form'
import todoReducer from './TodoReducer'

export default combineReducers({
    form: formReducer,
    todoList: todoReducer
});