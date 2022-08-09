import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root{
    --primary: #006BEA;

}


button{
    cursor: pointer;
}
html{
    width: 100vw;
    height: 100vh;
}
body{
    font-family: 'Inter';
    transition: all 0.3s;
    /* background-color: #ededed; */
    width: 100%;
    height: 100%;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`;

export const PrimaryButton = styled.button`
  text-transform: unset;
  border-radius: 20px;
  background-color: #2189ff;
  border: none;
  color: #fff;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  font-weight: 700;

  &:hover {
    background-color: #006bea;
    color: #eee;
  }
`;
