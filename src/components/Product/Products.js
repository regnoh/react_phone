import React, { Component } from "react";
import styled from "styled-components";
import Title from "../commons/Title";
import ProductItem from "./ProductItem";
import { storeProducts } from "../../data/products";
import { ProductConsumer } from "../../contexts/ProductContext";
export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <ProductItem key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
