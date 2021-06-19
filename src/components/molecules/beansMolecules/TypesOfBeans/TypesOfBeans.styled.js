import styled from 'styled-components';
import arabica from 'assets/images/beans/TypesBeans/arabica.png';
import robusta from 'assets/images/beans/TypesBeans/robusta.png';

export const Main = styled.section`
  height: 100vh;
  background: ${({ theme }) => theme.colors.grey};
`;

export const Head = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.crimson};
  margin-bottom: 30px;
`;

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 550px 500px;
  grid-template-rows: 50px 250px 270px;
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h2`
  display: grid;
  justify-items: center;
  grid-row-start: 1;
  font-size: ${({ theme }) => theme.fonts.xl};
  line-height: 1.5;
`;

export const Text = styled.article`
  display: grid;
  grid-row-start: 3;
  justify-items: center;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fonts.l};
  color: ${({ theme }) => theme.colors.Black};
`;

export const Arabica = styled.div`
  grid-row-start: 2;
  height: 250px;
  background-image: url(${arabica});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Robusta = styled.div`
  grid-row-start: 2;
  height: 250px;
  background-image: url(${robusta});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;
