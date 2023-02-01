import styled from "styled-components";

export const BannerStyles = styled.div`
  display: block;
  .banner-container {
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh !important;
    width: 100%;
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    object-fit:cover;
  }

  .banner-container::before {
    content: " ";
    opacity: 0.95;
    position: absolute;
    height: 100vh !important;
    width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    background-image: linear-gradient(to right, #363795, #005c97);
  }

  .banner {
    z-index: 1;
    width: 50%;
  }

  .title {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 7px;
    color: rgba(255, 255, 255, 0.7);
  }

  .title-banner {
    font-size: 46px;
    line-height: 64px;
    color: rgba(255, 255, 255, 0.7);
  }

  .paragrahp {
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
    font-size: 15px;
    text-align: center;
    line-height: 24px;
  }
`;
