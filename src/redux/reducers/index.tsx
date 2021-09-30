import UserReducer from "./userReducers";
import { combineReducers } from 'redux'
import ProductReducer from './productReduces'


const rootReducer = combineReducers({
    user: UserReducer,
    product: ProductReducer,
})

// set-Up redux provider

export default rootReducer;