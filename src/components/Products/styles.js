import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  ul {
    margin: 0 auto;
    display: flex;
    padding: 10px 10px;
    gap: 10px;
    margin-top: 80px;
    overflow: auto;
    height: 380px;
  }

  @media screen and (min-width: 768px) {
    width: 90%;

    ul {
      overflow: none;
      flex-wrap: wrap;
      height: auto;
      align-items: center;
      justify-content: center;
    }
  }
`;
