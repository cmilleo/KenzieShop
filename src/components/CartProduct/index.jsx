import React from "react";

import { Container } from "./styles";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removeCartThunk } from "../../store/modules/cart/thunks";

export const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  function handleDelete(product) {
    dispatch(removeCartThunk(product));
  }

  return (
    <Container>
      <img src={product.img} alt="" />
      <div className="infoProductCart">
        <h3>{product.name}</h3>
        <div className="containerRemove">
          <span>R$ {product.price},00</span>
          <FaTrash onClick={() => handleDelete(product)} />
        </div>
      </div>
    </Container>
  );
};
