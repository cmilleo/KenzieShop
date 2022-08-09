import React from "react";

import { Container } from "./styles";
import { useSelector } from "react-redux/es/exports";
import { PrimaryButton } from "../../styles/Global";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  return (
    <Container>
      <h2>Resumo do pedido</h2>
      <div className="total">
        <p>{cart.length} Produtos</p>
        <span>
          R${" "}
          {String(cart.reduce((acc, prod) => acc + prod.price, 0)).slice(0, 6)}
          ,00
        </span>
      </div>
      <PrimaryButton
        onClick={() => {
          if (cart.length > 0) {
            setTimeout(() => history.push("/"), 2500);
            toast.success("Pedido finalizado com sucesso");
          } else {
            toast.error("Carrinho vazio");
          }
        }}
      >
        Finalizar o pedido
      </PrimaryButton>
    </Container>
  );
};
