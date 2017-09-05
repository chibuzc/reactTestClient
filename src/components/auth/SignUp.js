import React, { Component } from 'react';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { signUpUser, updateLoginDetails } from '../../actions'

class Signup extends Component{
	onInputChange = (event) => {
		event.preventDefault();
		const { dispatch } =  this.props;
		const value =  event.target.value;
		const key = event.target.name;
		dispatch(updateLoginDetails(key, value))
	}

	handleFormSubmit=(event) => {
		event.preventDefault()
		const { dispatch } =  this.props;
		console.log("props", this.props)
		dispatch(signUpUser())
	}

	render(){
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<TextField
				      hintText="Email"
				      name = "email"
				      floatingLabelText="Email"
					  onChange = {this.onInputChange}
				      />

				      <br />
				      <TextField
					      hintText="Password"
					      name="password"
					      floatingLabelText="Password"
					      type="password" 
					      onChange = {this.onInputChange}
					     />
					      <br />
				     <TextField
				      hintText="Confirm Password"
				      name="confirmPassword"
				      floatingLabelText="Confirm Password"
				      type="password" 
				      onChange = {this.onInputChange}
				     />
				     	<br />
							
					    <RaisedButton type="submit" label="Sign Up" primary={true} />
					</form>
			</div>
		)
	}
}

export default connect()(Signup)