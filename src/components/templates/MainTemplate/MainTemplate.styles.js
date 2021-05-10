import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr;
  background-color: ${({ theme }) => theme.colors.cream};
`;
