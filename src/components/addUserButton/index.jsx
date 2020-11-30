import React from "react";

import "./addUserButton.scss";


class AddUserButton extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
      <button className="add_user" onClick={this.props.click}>Add user</button>
    );
  }
}

export default AddUserButton;