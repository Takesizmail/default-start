import * as constants from './constants'
import {setAuth} from './reducer'
const initialState  = {
    isAuth : false as boolean
}

type InitialStateType = typeof initialState;

const authReducers = (state = initialState,action:any):InitialStateType =>{

    switch (action.type){

        case constants.SET_IS_AUTH:
            return setAuth(state,action);

        default:
            return state
    }

}

export default (state= initialState, action: any) => authReducers(state, action)