import React, { Component } from 'react';
import Header from './Header'
import AppBarIcon from './AppBar'

export default class App extends Component {
  render() {
    return (
      <div>
      		<AppBarIcon />
			<Header />
			{this.props.children}
      </div>
    );
  }
}
