import styled from "styled-components";

export const ServicesStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafbfe !important;
  position: relative;
  padding-bottom:80px;
  margin-top:2rem;

  .services-title {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0px;
    padding-bottom: 1rem;
    line-height: 1;
    font-size: 1.75rem;
    font-weight: 700;
    text-align: center !important;
    margin-top: 2.5rem;
  }

  .line {
    width: 50px;
    height: 2px;
    margin-right: auto;
    margin-left: auto;
    background-color: #f6cb42 !important;
    margin-top: 1rem !important;
  }

  .services-paragraph {
    text-align: center !important;
    color: #858d96 !important;
    letter-spacing: 0.02em;
    padding-top: 1rem !important;
    font-size: 14.4px;
    line-height: 24px;
  }

  .services-cards {
    margin-top: 3rem !important;
    display: grid;
    grid-template-columns: auto auto auto;
    width: 70vw;
    margin: auto;
    gap:1.5rem;
    height:auto;
  }
`;
