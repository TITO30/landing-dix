import styled from "styled-components";

export const InformationStyles = styled.div`
  display: block;
  .information-container {
    width: 90%;
    height: 450px;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .information-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    width:80%;
  }

  .information-text {
    padding:12px;
    width:80%;
    display:inline-block;
  }

  .information-text h3 {
    margin-bottom: 25px;
    margin-top: 0;
    line-height: 36px;
    font-size: 24px;
  }

  .information-text ul {
    margin-bottom: 1rem;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    list-style: none;
  }

  .information-text li {
    position: relative;
    line-height: 24px;
    font-size: 15px;
    padding: 7px 0 7px 20px;
    color: #858d96 !important;
    font-family: BlinkMacSystemFont, sans-serif;\

  }

  .information-text li::before {
  content: "";
    border-radius: 50%;
    width: 7px;
    height: 7px;
    position: absolute;
    left: 0;
    top: 14px;
    background-color:#f6cb42 !important;
  }

  .img-container{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    text-align:center;
  }

  .img-information {
    width: 70%;
    height: auto;
   
  }
`;
