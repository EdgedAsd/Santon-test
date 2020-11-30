import React from "react";
import FormField from '../formField';
import SaveUser from '../saveUser';

import './createUser.scss';

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: ""
    }

    this.getInfo = this.getInfo.bind(this);
  }

  getInfo(field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    return (
      <div className="create_user" style={{display: this.props.display}}>
        <form className="create_user_form">
          <FormField holder="Name" field="name" getInfo={this.getInfo}/>
          <FormField holder="Password" field="password" getInfo={this.getInfo}/>

          <div className="buttons">
            <button className="cancel_btn form_btn" onClick={this.props.hideClick}>Cancel</button>
            <SaveUser getValues={() => this.state} hideClick={this.props.hideClick}/>
          </div>
        </form>
      </div>
    );
  }
}
