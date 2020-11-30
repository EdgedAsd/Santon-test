import React from "react";
import "./state/stores/ProductsStore";
import "./state/stores/UserStore";
import './index.scss';

import ProductList from "./components/productList";
import Header from "./components/header";

export class App extends React.Component {

  	render() {
	    return (
	      <main style={{position: "relative"}}>
	      	<Header />
	        <ProductList />
	      </main>
    	);
  	}
}
