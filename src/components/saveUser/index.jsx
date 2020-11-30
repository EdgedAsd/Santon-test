import React from "react";

import { Registry } from "../../state/common/store/registry";


class SaveProduct extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

    let data = this.props.getValues();
    event.preventDefault();

    Registry.dispatch("ADD_USER", {
      user: {
        name: data.name,
        password: data.password
      }
    });

    this.props.hideClick();
  }

  render() {
    
    return (
      <input className="save_btn form_btn" onClick={this.handleClick} value="Save" type="submit"/>
    );
  }
}

export default SaveProduct;