import {combineReducers} from 'redux'

import { store as auth } from './auth'


const rootReducer = combineReducers({
    auth
})

export default rootReducer