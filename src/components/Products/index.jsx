import React from "react";

import { Container } from "./styles";
import { useSelector } from "react-redux/es/exports";
import { Product } from "../Product";

export const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <Container>
      <ul>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ul>
    </Container>
  );
};
