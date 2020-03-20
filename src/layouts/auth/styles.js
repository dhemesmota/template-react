import { fadeIn } from 'react-animations';

import styled, { keyframes } from 'styled-components';

const animated = keyframes(fadeIn);

export const Wrapper = styled.div`
  background: #fff;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  animation: ${animated} 1s;

  width: 100%;
  max-width: 360px;
  background: transparent;
  padding: 50px 30px;

  display: flex;
  flex-direction: column;

  h1 {
    color: #7d7d7d;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    color: #757575;
    text-align: center;
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 20px;
  }

  div.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    small {
      color: #757575;
      text-align: center;
      font-weight: normal;
      font-size: 14px;
      margin-right: 10px;
    }

    a {
      color: #61dafb;
      text-align: right;
      transition: all 0.2s;
      border: 1px solid transparent;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
      transition: all 0.2s ease-out;

      &:hover,
      &:active {
        background: #61dafb;
        border: 1px solid #61dafb;
        color: #fff;
      }
    }
  }
`;
