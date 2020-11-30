import React from "react";

import { Registry } from "../../state/common/store/registry";

import "./addProduct.scss";


class AddProduct extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
      <button className="add_product" onClick={this.props.click}>Add</button>
    );
  }
}

export default AddProduct;