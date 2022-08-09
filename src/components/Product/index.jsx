import React from "react";
import { PrimaryButton } from "../../styles/Global";
import { useDispatch } from "react-redux/es/exports";
import { Container } from "./styles";
import { addCartThunk } from "../../store/modules/cart/thunks";

export const Product = ({ product }) => {
  const dispatch = useDispatch();

  function handleAddCart() {
    dispatch(addCartThunk(product));
  }
  return (
    <Container>
      <img src={product.img} alt="" />
      <h3>{product.name}</h3>
      <span>R$ {product.price},00</span>
      <PrimaryButton onClick={handleAddCart}>Comprar</PrimaryButton>
    </Container>
  );
};
