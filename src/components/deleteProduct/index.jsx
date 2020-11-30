import React from "react";

import { Registry } from "../../state/common/store/registry";
// import { ADD_PRODUCT } from "../../state/common/store/store";

import "./deleteProduct.scss";


class DeleteProduct extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Registry.dispatch("REMOVE_PRODUCT", {
      id: this.props.product_id
    });
  }

  render() {
    
    return (
      <button className="delete_product" onClick={this.handleClick}>x</button>
    );
  }
}

export default DeleteProduct;