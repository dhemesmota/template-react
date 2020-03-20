import styled from 'styled-components';

export const InputGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 20px;
  }
`;
