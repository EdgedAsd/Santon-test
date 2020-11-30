import React from "react";
import "./state/stores/ProductsStore";
import './index.scss';

import ProductList from "./components/productList";

export class App extends React.Component {

  render() {
    return (
      <main style={{position: "relative"}}>
        <h1>Frontend Test Task</h1>
        <ProductList />
      </main>
    );
  }
}
