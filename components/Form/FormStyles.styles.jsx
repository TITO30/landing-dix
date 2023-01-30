import styled, { keyframes } from "styled-components";

export const FormStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 80px;
  margin-top: 2rem;

  .form-title {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0px;
    padding-bottom: 1rem;
    line-height: 1;
    font-size: 1.75rem;
    font-weight: 700;
    text-align: center !important;
    margin-top: 20px;
  }

  .line {
    width: 50px;
    height: 2px;
    margin-right: auto;
    margin-left: auto;
    background-color: #f6cb42 !important;
    margin-top: 1rem !important;
  }

  .form-paragraph {
    width: 50vw;
    margin: auto;
    text-align: center !important;
    color: #858d96 !important;
    letter-spacing: 0.02em;
    padding-top: 1rem !important;
    font-size: 14.4px;
    line-height: 24px;
  }

  .form-information {
    margin-top: 2rem !important;
    display: flex;
    width: 70vw !important;
    justify-content: space-between;
  }

  .information-text span {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .information-text {
    font-size: 14px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    padding-top: 2rem;
    padding-left: 20px;
    color: #858d96 !important;
  }

  .form-container {
    width: 70%;
  }

  .text-user {
    display: flex;
    gap: 1rem;
  }

  .text-comments {
    display: block;
    width: 100%;
    gap: 1rem;
  }

  .form-control {
    box-sizing: border-box;
    margin-bottom: 20px;
    box-shadow: none !important;
    height: 40px;
    border: 1px solid #e0e0e0;
    font-size: 14px;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    font-family: BlinkMacSystemFont, sans-serif;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .textarea {
    height: 100px !important;
  }

  .form-control:focus {
    outline: none !important;
    border: 1px solid #005c97;
  }

  .form-control-error {
    box-sizing: border-box;
    margin-bottom: 20px;
    box-shadow: none !important;
    height: 40px;
    border: 1px solid red;
    font-size: 14px;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid red;
    -webkit-appearance: none;
    font-family: BlinkMacSystemFont, sans-serif;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  @keyframes example {
    0% {
      box-shadow: -2px 4px 44px -4px rgba(252, 14, 14, 0.75);
      -webkit-box-shadow: -2px 4px 44px -4px rgba(252, 14, 14, 0.75);
      -moz-box-shadow: -2px 4px 44px -4px rgba(252, 14, 14, 0.75);
    }
    25% {
      box-shadow: -2px 4px 44px 8px rgba(252, 14, 14, 0.75);
      -webkit-box-shadow: -2px 4px 44px 8px rgba(252, 14, 14, 0.75);
      -moz-box-shadow: -2px 4px 44px 8px rgba(252, 14, 14, 0.75);
    }
    50% {
      box-shadow: -2px 4px 44px -4px rgba(252, 14, 14, 0.75);
      -webkit-box-shadow: -2px 4px 44px -4px rgba(252, 14, 14, 0.75);
      -moz-box-shadow: -2px 4px 44px -4px rgba(252, 14, 14, 0.75);
    }
    75% {
      box-shadow: -2px 4px 44px -4px rgba(252, 14, 14, 0.75);
      -webkit-box-shadow: -2px 4px 44px -4px rgba(252, 14, 14, 0.75);
      -moz-box-shadow: -2px 4px 44px -4px rgba(252, 14, 14, 0.75);
    }
    100% {
      box-shadow: -2px 4px 44px 8px rgba(252, 14, 14, 0.75);
      -webkit-box-shadow: -2px 4px 44px 8px rgba(252, 14, 14, 0.75);
      -moz-box-shadow: -2px 4px 44px 8px rgba(252, 14, 14, 0.75);
    }
  }

  .textarea-error {
    height: 100px !important;
  }

  .form-control-error:focus {
    outline: none !important;
    border: 1px solid #005c97;
  }

  .button-submit {
    width: 13vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #f6cb42 !important;
    background-color: #f6cb42 !important;
    color: white;
    border-radius: 10px;
    font-size: 14px;
    transition: all 0.5s;
    text-align: center;
    float: right;
  }

  .button-submit:hover {
    cursor: pointer;
  }
`;
