import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  background: #f9f9f9;
  border: 2px solid #f9f9f9;
  border-radius: 5px;
  transition: all 0.2s ease-out;

  margin-top: ${({ label }) => (label ? '8px' : 0)};

  &.has-error {
    border: 2px solid #fa4d4d;
  }

  ${props =>
    !props.error &&
    css`
      &:active,
      &:hover {
        font-size: 16px;
        color: #000;
        border: 2px solid #61dafb;
      }
    `}

  svg {
    color: ${({ error }) => (error ? '#fa4d4d' : '#28272c')} !important;
  }

  input {
    width: 100%;
    height: 45px;
    padding: 13px 5px;
    color: #28272c;
    transition: all 0.2s ease-out;
    border: none;
    background: transparent;

    &::placeholder {
      font-size: 16px;
      color: #28272c;
    }
  }

  svg {
    margin-right: 15px;
    margin-left: 15px;
    color: #28272c;
  }
`;
