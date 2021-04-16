import styled from 'styled-components';
import lightRoasted from '../../../assets/images/light-Roasted.png';
import mediumRoasted from '../../../assets/images/medium-Roasted.png';
import darkRoasted from '../../../assets/images/dark-Roasted.png';

export const Header = styled.div`
  font-size: ${({ theme }) => theme.fonts.xxl};
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.crimson};
  display: block;
  text-align: center;
  padding: 50px;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  display: grid;
  grid-template-columns: repeat(3, 500px);
  column-gap: 30px;
  justify-content: center;
  align-items: center;
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

export const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.fonts.xl};
  display: grid;
  justify-items: center;
  grid-row-start: 2;
  margin-bottom: 5px;
  span {
    font-weight: normal;
    color: ${({ theme }) => theme.colors.lightBlack};
    padding-top: 5px;
  }
`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fonts.m};
  color: ${({ theme }) => theme.colors.Black};
  display: grid;
  grid-row-start: 3;
  text-align: center;
`;
