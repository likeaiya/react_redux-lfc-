import React, { Component } from 'react'
import Container from './container/count-container'
import PersonContainer from './container/person-container'

export default class App extends Component {
	render() {
		return (
			<div>
				<Container/>
				<br/>
				<br/>
				<br/>
				<PersonContainer/>
			</div>
		)
	}
}
