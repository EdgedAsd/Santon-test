import React from "react";
import { withStore } from "../../state/withStore";
import { Product } from "../product";
import AddProduct from "../addProduct";
import CreateProduct from '../createProduct';
import "./product-list.scss";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      createProduct: false
    }

    this.showProductWindow = this.showProductWindow.bind(this);
    this.hideProductWindow = this.hideProductWindow.bind(this);
  }

  showProductWindow() {
    this.setState({
      createProduct: true
    })
  }

  hideProductWindow() {
    this.setState({
      createProduct: false
    })
  }

  render() {
    const { products } = this.props;

    return (
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        <AddProduct click={this.showProductWindow}/>
        <CreateProduct display={this.state.createProduct ? 'block' : 'none'} hideClick={this.hideProductWindow} />
      </div>
    );
  }
}

export default withStore("products", (data) => data)(ProductList);