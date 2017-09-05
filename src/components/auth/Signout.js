import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions';


class signOut extends Component{
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log(this.props)
		const { dispatch } = this.props
		dispatch(signOutUser())
	}

	render(){
		return(
				<div>
					Signed Out
				 </div>
			)
	}
}

const mapStateToProps =(state) => ({
		signOutUser: state.signOutUser
})

export default connect(mapStateToProps)(signOut)