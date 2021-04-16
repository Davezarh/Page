import styled from 'styled-components';
import Coffee from '../assets/images/coffee.jpg';
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  height: 100vh;
  background-image: url(${Coffee});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const StyledTitle = styled.h1`
  position: absolute;
  font-size: ${({ theme }) => theme.fonts.xxxl};
  color: ${({ theme }) => theme.colors.crimson};
  top: 50vh;
  left: 42vw;
`;
export const StyledQuote = styled.p`
  position: absolute;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
  top: 60vh;
  left: 42vw;
  font-size: ${({ theme }) => theme.fonts.l};
`;
