import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: #dbdbdb;
  -webkit-box-shadow: 0px 5px 19px -8px rgba(0, 0, 0, 0.73);
  box-shadow: 0px 5px 19px -8px rgba(0, 0, 0, 0.73);
  .headerContainer {
    display: flex;
    width: 85%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  h1 {
    font-size: 20px;
    font-family: "Inter";
    font-weight: 900;
  }
  .cart {
    position: relative;
    cursor: pointer;
  }
  svg {
    font-size: 26px;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
  .qtdCart {
    background-color: var(--primary);
    border-radius: 50%;
    color: #dbdbdb;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    width: 20px;
    height: 20px;
    position: absolute;
    top: -9px;
    right: -5px;
  }
`;
