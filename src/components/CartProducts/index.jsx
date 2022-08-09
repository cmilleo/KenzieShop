import React from "react";
import { useSelector } from "react-redux";
import { CartProduct } from "../CartProduct";

import { Container } from "./styles";

export const CartProducts = () => {
  const { cart } = useSelector((state) => state);
  return (
    <Container>
      <ul>
        {cart.length > 0 ? (
          cart.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })
        ) : (
          <h2>Não há nada no carrinho</h2>
        )}
      </ul>
    </Container>
  );
};
