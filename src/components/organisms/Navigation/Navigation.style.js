import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cream};
`;
export const StyledLink = styled(NavLink)`
  margin: 10px 20px;
  padding: 15px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fonts.l};
  color: ${({ theme }) => theme.colors.black};
`;
