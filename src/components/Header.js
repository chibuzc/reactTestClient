import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component{
	renderLinks(){
		const { authenticated } = this.props
		if(authenticated){
			return (
					<Link to='/signout'>
					<RaisedButton  label="Sign Out" primary={true} />
					</Link>
				)
		}else{
			return (
					<div>
					<Link to='/signup'>
					<RaisedButton  label="Sign Up" primary={true} />
					</Link>
					<Link to='/signin'>
					<RaisedButton  label="Login" primary={true} />
					</Link>
					</div>
				)
		}
	}
	render(){
		return(
			<div>
			{this.renderLinks()}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	authenticated: state.auth.authenticated
})

export default connect(mapStateToProps)(Header)