import styled from 'styled-components';

export const LoaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`;

export const Title = styled.p`
font-size: ${props => props.fontSize};
  text-align: center;
  margin-left: 5px;
`;