import React from 'react';
import { Route } from 'react-router-dom';
import { Wrapper, StyledLink, ImageBox } from './HomeLayout.style';
import { ReactComponent as Feather } from 'assets/images/layouts/HomeLayout/feather.svg';
const HomeLayout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <ImageBox>
          <Feather width="128px" height="128px" />
        </ImageBox>
        <h2>Light Cafe lekkość to marzenie, każdej kawy.</h2>
        <StyledLink to="">Strona główna</StyledLink>
        <StyledLink to="/menu">Menu</StyledLink>
        <StyledLink to="/ziarna">Ziarna</StyledLink>
      </Wrapper>
      {children}
    </>
  );
};

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <HomeLayout>
          <Component {...props} />
        </HomeLayout>
      )}
    />
  );
};
export default HomeLayoutRoute;
