import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
		  AUTH_USER,
		  UNAUTH_USER,
		  AUTH_ERROR,
		  UPDATE_LOGIN_DATA
		} from './types'

const ROOT_URL = 'http://localhost:3090'

export function signUpUser(){
	return function(dispatch, getState){
		const { form } = getState();
		const { email, password, confirmPassword } = form;
		axios.post(`${ROOT_URL}/signup`, {email, password})
		.then(response => {
			dispatch({type: AUTH_USER});
			localStorage.setItem('token', response.data.token)
			browserHistory.push('/feature')
		})
		.catch(()=>{
			dispatch(authError('Bad Login Info'))
		})
	}
}


export function signinUser() { 
	console.log('in')
	return function(dispatch, getState){
		//submit email/password to the server
		const { form } =  getState();
		const { email, password } = form;

		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
	//if the request is good...
		//-update the state to indicate user is authenticated
		dispatch ({ type: AUTH_USER});
		// save the jwt token
		localStorage.setItem('token', response.data.token) 
		//redirect to the route '/feature'
			browserHistory.push('/feature')	
		})
	
		.catch(() => {
			//if the request is bad
		//show an error to the user
			dispatch(authError('Bad Login Info'))
		})
	}
}
export const signOutUser= () => {
	return function(dispatch){
		dispatch({ type: UNAUTH_USER });
		localStorage.removeItem('token')
	}
		
}




export function authError(error){
	return {
		type: AUTH_ERROR,
		payload: error
	}
}



export const updateLoginDetails = (key, value) => {
	return {
		type: UPDATE_LOGIN_DATA,
		data: {
			[key]: value,
		}
	}
}
