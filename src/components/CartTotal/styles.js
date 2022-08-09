import styled from "styled-components";

export const Container = styled.section`
  width: 300px;
  height: 300px;
  background-color: #dbdbdb;
  -webkit-box-shadow: 5px 5px 15px -4px rgba(0, 0, 0, 0.64);
  box-shadow: 5px 5px 15px -4px rgba(0, 0, 0, 0.64);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  .total {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-weight: 700;
  }
  button {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    min-width: 250px;
    margin: 0;
  }
`;
