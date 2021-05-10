import React from 'react';
import { StyledLink, Wrapper } from './Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="">Strona główna</StyledLink>
      <StyledLink to="/menu">Menu</StyledLink>
      <StyledLink to="/ziarna">Ziarna</StyledLink>
    </Wrapper>
  );
};
export default Navigation;
