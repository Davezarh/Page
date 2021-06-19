import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/layouts/HomeLayout/logoHome.jpg';
export const Wrapper = styled.nav`
  display: flex;
  align-content: flex-start;
  justify-content: flex-end;
  height: 400px;
  width: 100vw;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    display: grid;
    align-content: center;
    justify-content: center;
    font-style: italic;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 2px 2px black;
  }
`;
export const StyledLink = styled(NavLink)`
  margin: 25px 20px;
  padding: 25px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fonts.l};
  color: ${({ theme }) => theme.colors.white};
`;

export const ImageBox = styled.section`
  display: grid;
  grid-template-rows: 315px;
  justify-items: end;
  align-items: center;
  margin-left: 15px;
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: linear;

  &:hover {
    transform: rotate(360deg);
  }
`;
