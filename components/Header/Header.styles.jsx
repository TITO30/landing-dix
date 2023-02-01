import styled from "styled-components";

export const HeaderStyles = styled.div`
  position: absolute;
  color: white;
  width: 100%;
  z-index: 1;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

  .header-container {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .nav-items {
    color: white;
    display: flex;
    gap: 1.5rem;
  }

  .nav-items p:hover {
    cursor: pointer;
  }
`;
