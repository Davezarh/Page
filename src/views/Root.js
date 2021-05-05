import { GlobalStyle } from 'assets/Styles/globalStyle';
import { theme } from 'assets/Styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Wrapper } from './Root.styled';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Home from 'views/Home';
import Beans from 'components/organisms/Beans/Beans';
import Menu from 'components/organisms/Menu/Menu';
const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <Wrapper>
          <Switch>
            <Route path="/ziarna">
              <Beans></Beans>
            </Route>
            <Route path="/menu">
              <Menu></Menu>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Wrapper>
      </MainTemplate>
    </ThemeProvider>
  </Router>
);
export default Root;
