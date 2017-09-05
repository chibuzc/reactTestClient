import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginDetails, signinUser } from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



class Signin extends Component {
	constructor(props) {
		super(props);
	}

	handleFormSubmit=(event) => {
		event.preventDefault()
		const { dispatch } =  this.props;
		console.log("props", this.props)
		dispatch(signinUser())
	}

	onInputChange = (event) => {
		event.preventDefault();
		const { dispatch } =  this.props;
		// console.log('event.target', event.target);
		const value =  event.target.value;
		const key = event.target.name;
		dispatch(updateLoginDetails(key, value))
	}

	componentDidMount() {
		console.log(this.props)
	}

	renderAuthError(){
		if (this.props.authError){
			return (
				<div>
					<div name="StylesOverridingInlineExample"
					    label="Checked the mail"
					    style={{
					      width: '50%',
					      margin: '0 auto',
					      border: '2px solid #D50000',
					      backgroundColor: '#D32F2F',
					    }}
						 >
							 {this.props.authError}	

					</div>
				</div>
			)
		}
	}
	
	render(){

		
		return(
		 <form onSubmit={(this.handleFormSubmit)}>
		 {this.renderAuthError()}
			<TextField
			
		      hintText="Email"
		      name = "email"
		      floatingLabelText="email"
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
					
			      <RaisedButton type="submit" label="Sign In" primary={true} />
		</form>
		);
	}
}

const mapStateToProps = (state) => ({
	form: state.form,
	authError: state.auth.error
})

export default connect(mapStateToProps)(Signin)
// export default Signin

