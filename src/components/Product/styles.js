import styled from "styled-components";

export const Container = styled.li`
  border: 1px solid #9b9b9b;
  border-radius: 10px;
  min-width: 285px;
  width: 285px;
  height: 350px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
  text-align: center;

  &:hover {
    -webkit-box-shadow: 0px 5px 19px -8px rgba(0, 0, 0, 0.73);
    box-shadow: 0px 5px 19px -8px rgba(0, 0, 0, 0.73);
    transform: scale(1.03);
  }
  h3 {
    width: 90%;
  }
  span {
    font-weight: 700;
    font-size: 19px;
  }
  button {
    width: 90%;
    min-height: 40px;
  }
`;
