import React from "react";

import { Registry } from "../../state/common/store/registry";


class SaveProduct extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    // let data = this.props.getValues();
    console.log(1);

    // Registry.dispatch("ADD_PRODUCT", {
    //   product: {
    //     id: 1,
    //     title: 1,
    //     description: 1,
    //     price: 1
    //   }
    // });

    // this.props.hideClick();
  }

  render() {
    
    return (
      <button className="save_btn form_btn" onClick={this.handleClick}>Save</button>
    );
  }
}

export default SaveProduct;