import React from 'react';
import { Route } from 'react-router-dom';
import { Wrapper, StyledLink } from './BeansLayout.style';

const BeansLayout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <StyledLink to="">Strona główna</StyledLink>
        <StyledLink to="/menu">Menu</StyledLink>
        <StyledLink to="/ziarna">Ziarna</StyledLink>
      </Wrapper>
      {children}
    </>
  );
};

const BeansLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <BeansLayout>
          <Component {...props} />
        </BeansLayout>
      )}
    />
  );
};

export default BeansLayoutRoute;
