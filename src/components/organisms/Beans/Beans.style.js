import styled from 'styled-components';

export const Wrapper = styled.section`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.grey};
`;
export const Header = styled.h2`
  text-align: center;
  margin: 30px;
  font-size: ${({ theme }) => theme.fonts.xxl};
  color: ${({ theme }) => theme.colors.crimson};
`;
