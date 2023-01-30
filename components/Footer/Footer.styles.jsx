import styled from "styled-components";

export const FooterStyles = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;
  padding: 15px 0;
  background-color: #2e313a;

  .footer-items {
    width: 80vw;
    justify-content: space-between;
    display: flex;
  }

  .text-copy {
    line-height: 36px;
    color: #858d96 !important;
    font-size: 14px;
  }

  .social-media {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .social-items {
    border: 2px solid #40434e;
    border-radius: 50%;
    color: #6b707d !important;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    line-height: 32px;
    text-align: center;
  }

  .social-items:hover {
    cursor: pointer;
  }
`;
