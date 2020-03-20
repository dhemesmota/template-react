import { darken } from 'polished';
import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const primary = '#61dafb';

export const Btn = styled.button.attrs(({ type = 'button' }) => ({
  type,
}))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 45px;

  border: 0;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  transition: all 0.2s;
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};

  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  ${({ outline, color }) =>
    outline
      ? css`
          background: transparent;
          border: 1px solid ${color || primary};
          color: ${color || primary};
          border-bottom: 4px solid ${color || primary};
        `
      : css`
          background: ${color || primary};
          border-bottom: 4px solid ${color || primary};
        `};
  ${({ disabled, color }) =>
    !disabled &&
    css`
      &:hover {
        background: ${darken(0.04, color || primary)};
        color: #fff;
        border-bottom: 4px solid ${darken(0.1, color || primary)};
      }

      &:active {
        background: ${darken(0.1, color || primary)};
        border-bottom: 4px solid ${darken(0.1, color || primary)};
      }
    `}
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${rotate} 2s linear infinite;
`;
