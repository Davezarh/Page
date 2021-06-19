import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/layouts/BeansLayout/logoBeans.jpg';
export const Wrapper = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 250px;
  width: 100%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledLink = styled(NavLink)`
  margin: 10px 20px;
  padding: 15px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fonts.l};
  color: ${({ theme }) => theme.colors.white};
`;
