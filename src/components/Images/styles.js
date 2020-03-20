import styled from 'styled-components';

export const ImgContainer = styled.img`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || '100%'};
  margin: ${({ margin }) => margin || '0 auto'};
  border-radius: ${({ rounded }) => rounded || '0'};
`;
