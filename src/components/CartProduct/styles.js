import styled from "styled-components";

export const Container = styled.li`
  list-style: none;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 1rem;
  font-weight: 700;

  span {
    color: var(--primary);
  }
  .containerRemove {
    width: 90%;
    display: flex;

    justify-content: space-between;
  }
  .infoProductCart {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  svg {
    color: gray;
    cursor: pointer;

    &:hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
