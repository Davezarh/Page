import styled from 'styled-components';
import lightRoasted from 'assets/images/beans/RoastedBeans/light-Roasted.png';
import mediumRoasted from 'assets/images/beans/RoastedBeans/medium-Roasted.png';
import darkRoasted from 'assets/images/beans/RoastedBeans/dark-Roasted.png';

export const Main = styled.section`
  height: 100vh;
  background: ${({ theme }) => theme.colors.lightGrey};
`;

export const Head = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.crimson};
  margin-bottom: 30px;
`;
export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 280px 320px 280px;
  grid-template-rows: 300px 100px 250px;
  column-gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h2`
  font-size: ${({ theme }) => theme.fonts.xl};
  display: grid;
  justify-items: center;
  grid-row-start: 2;
  line-height: 1.5;
  span {
    font-weight: normal;
    color: ${({ theme }) => theme.colors.lightBlack};
    line-height: 1.5;
  }
`;

export const Text = styled.article`
  font-size: ${({ theme }) => theme.fonts.l};
  color: ${({ theme }) => theme.colors.Black};
  display: grid;
  grid-row-start: 3;
  text-align: center;
  line-height: 1.5;
`;

export const LightRoastedImage = styled.div`
  height: 230px;
  background-image: url(${lightRoasted});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const MediumRoastedImage = styled.div`
  height: 260px;
  background-image: url(${mediumRoasted});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const DarkRoastedImage = styled.div`
  height: 230px;
  background-image: url(${darkRoasted});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;
