import React from 'react';
import { StyledLink, Wrapper } from './Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/ziarna">Ziarna</StyledLink>
      <StyledLink to="/menu">Menu</StyledLink>
      <StyledLink to="/kontakt">Kontakt</StyledLink>
    </Wrapper>
  );
};
export default Navigation;
