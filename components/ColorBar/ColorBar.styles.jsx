import styled from "styled-components";

export const ColorBarStyles = styled.div`
  justify-content: center;
  display: flex;
  position: relative;
  .color-container {
    width: 100%;
    height: 350px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .color-container::before {
    content: " ";
    opacity: 0.95;
    position: absolute;
    height: 350px;
    width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    background-image: linear-gradient(to right, #363795, #005c97);
  }

  .color-text {
    z-index: 1;
  }

  .color-title {
    color: #ffffff !important;
    font-size: 30px;
    line-height: 1.2;
  }

  .color-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    max-width: 600px;
    margin: 0 auto;
    padding-top: 1rem !important;
    margin-right: auto !important;
    margin-left: auto !important;
    line-height: 24px;
  }
`;
