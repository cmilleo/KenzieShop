import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Container } from "./styles";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useHistory } from "react-router-dom";

export const HeaderHome = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  return (
    <Container>
      <div className="headerContainer">
        <h1>KenzieShop</h1>
        <div className="cart" onClick={() => history.push("/cart")}>
          <MdOutlineShoppingCart />
          {cart.length > 0 && <div className="qtdCart">{cart.length}</div>}
        </div>
      </div>
    </Container>
  );
};
