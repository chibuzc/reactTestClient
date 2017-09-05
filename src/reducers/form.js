import { UPDATE_LOGIN_DATA } from '../actions/types'

const initialState = {
	email: null,
	password: null
}

export default (state = initialState, action) => {
	switch(action.type){
		case UPDATE_LOGIN_DATA:
			return {...state, ...action.data }
		default:
			return state;
	}

};