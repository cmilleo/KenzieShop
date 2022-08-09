import styled from "styled-components";

export const Container = styled.div`
  .containerCart {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
  }

  .backButton {
    border: 0;
    background-color: gray;
    border-radius: 4px;
    padding: 0 1rem;
    height: 30px;
    color: #fff;
    font-weight: 700;
    position: absolute;
    top: 21px;
    right: 200px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  @media screen and (min-width: 768px) {
    .containerCart {
      width: 90%;
      margin: 0 auto;
      flex-direction: row-reverse;
      justify-content: space-around;
      margin-top: 50px;
    }
  }
`;
