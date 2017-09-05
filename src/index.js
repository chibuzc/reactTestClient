import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reduxThunk from 'redux-thunk'
import Signin from './components/auth/SignIn';
import App from './components/app';
import reducers from './reducers';
import Feature from './components/feature'
import RequireAuth from './components/auth/requireAuth'
import Signout from './components/auth/signout'
import Signup from './components/auth/SignUp'
import { AUTH_USER } from './actions/types'
// import Parent from './components/auth/parent'



const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store=createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token');

if (token){
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider>
  	<Router history={ browserHistory } >
  		
	  		<Route path='/' component={App} >
	    	<Route path = '/signin' component= {Signin} />
	    	<Route path = '/feature' component= {RequireAuth(Feature)} />
        <Route path ='/signout' component = {Signout} />
        <Route path ='/signup' component = {Signup} />
	    	</Route>	
   </Router>
   </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
