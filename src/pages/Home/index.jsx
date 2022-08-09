import React from "react";
import { HeaderHome } from "../../components/HeaderHome";
import { Products } from "../../components/Products";
import { Container } from "./styles";




export const Home = () => {
  

 
  return (
    <Container>
      <HeaderHome />
      <Products />
    </Container>
  );
};
