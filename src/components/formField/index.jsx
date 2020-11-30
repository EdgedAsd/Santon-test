import React from "react";
import "./formField.scss";

export default class FormField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({value: value});
    this.props.getInfo(this.props.field, value);
  }

  render() {
    return (
      <input type="text" placeholder={this.props.holder} onChange={this.handleChange} value={this.state.value} className="form_field"/>
    );
  }
}