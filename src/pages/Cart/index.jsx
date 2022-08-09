import React from "react";
import { useHistory } from "react-router-dom";
import { CartProducts } from "../../components/CartProducts";
import { CartTotal } from "../../components/CartTotal";
import { HeaderHome } from "../../components/HeaderHome";

import { Container } from "./styles";

export const Cart = () => {
  const history = useHistory();
  return (
    <Container>
      <HeaderHome></HeaderHome>
      <button className="backButton" onClick={() => history.push("/")}>
        Voltar
      </button>
      <div className="containerCart">
        <CartTotal />
        <CartProducts />
      </div>
    </Container>
  );
};
