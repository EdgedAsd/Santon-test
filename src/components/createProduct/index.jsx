import React from "react";
import FormField from '../formField';
import SaveProduct from '../saveProduct';

import './createProduct.scss'

export default class CreateProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      id: '',
      description: '',
      price: ''
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
      <div className="create_product" style={{display: this.props.display}}>
        <form className="create_product_form">
          <FormField holder="Title" field="title" getInfo={this.getInfo}/>
          <FormField holder="Id" field="id" getInfo={this.getInfo}/>
          <FormField holder="Description" field="description" getInfo={this.getInfo}/>
          <FormField holder="Price" field="price" getInfo={this.getInfo}/>

          <div className="buttons">
            <button className="cancel_btn form_btn" onClick={this.props.hideClick}>Cancel</button>
            <SaveProduct getValues={() => this.state} hideClick={this.props.hideClick}/>
          </div>
        </form>
      </div>
    );
  }
}
