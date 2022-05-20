import {combineReducers} from "redux"
import ReducerRegister from "./ReducerRegister"
import userReducer from "./userReducer"

const rootReducer = combineReducers({ReducerRegister, userReducer})

export default rootReducer