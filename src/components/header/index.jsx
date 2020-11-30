import React from "react";
import { withStore } from "../../state/withStore";

import AddUserButton from "../addUserButton"
import CreateUser from "../createUser"


class Header extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			createUser: false
		}

		this.showUserWindow = this.showUserWindow.bind(this);
		this.hideUserWindow = this.hideUserWindow.bind(this);
	}

	showUserWindow() {
		this.setState({
		  createUser: true
		})
	}

	hideUserWindow() {
		this.setState({
		  createUser: false
		})
	}

	render() {

		return (
			<header className="main_header">
	       		<h1>Frontend Test Task For {this.props.user.name ? this.props.user.name : "me"}</h1>
	       		<AddUserButton click={this.showUserWindow}/>
	       		<CreateUser display={this.state.createUser ? 'block' : 'none'} hideClick={this.hideUserWindow} />
	       	</header>
		)
	}
}

export default withStore("user", (data) => data)(Header);