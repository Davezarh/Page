import React from 'react';
import { Route } from 'react-router-dom';
import Logo from 'components/atoms/Logo/Logo';
import { Wrapper, StyledLink } from './MenuLayout.style';

const MenuLayout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Logo />
        <StyledLink activeClassName="active" to="">
          Strona główna
        </StyledLink>
        <StyledLink to="/menu">Menu</StyledLink>
        <StyledLink to="/ziarna">Ziarna</StyledLink>
      </Wrapper>
      {children}
    </>
  );
};

const MenuLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MenuLayout>
          <Component {...props} />
        </MenuLayout>
      )}
    />
  );
};

export default MenuLayoutRoute;
