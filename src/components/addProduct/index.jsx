import React from "react";

import { Registry } from "../../state/common/store/registry";
// import { ADD_PRODUCT } from "../../state/common/store/store";

import "./addProduct.scss";


class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Registry.dispatch("ADD_PRODUCT", {
      product: {
        id: 121212,
        title: "Игрушка aaaaaaaa",
        description:
          "Игрушка Король. Возвраст 5+. Материал плюш. Страна производства - Болгария",
        price: 1199100,
      }
    });
  }

  render() {
    
    return (
      <button className="add_product" onClick={this.handleClick}>Add</button>
    );
  }
}

export default AddProduct;