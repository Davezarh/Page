import { GlobalStyle } from 'assets/Styles/globalStyle';
import { theme } from 'assets/Styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import Home from 'components/organisms/Home/Home';
import Beans from 'components/organisms/Beans/Beans';
import Menu from 'components/organisms/Menu/Menu';
import HomeLayoutRoute from 'components/templates/HomeLayout/HomeLayout';
import MenuLayoutRoute from 'components/templates/MenuLayout/MenuLayout';
import BeansLayoutRoute from 'components/templates/BeansLayout/BeansLayout';
const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <BeansLayoutRoute
          path="/ziarna"
          exact
          component={Beans}
        ></BeansLayoutRoute>
        <MenuLayoutRoute path="/menu" exact component={Menu}></MenuLayoutRoute>
        <HomeLayoutRoute path="/" exact component={Home}></HomeLayoutRoute>
      </Switch>
    </ThemeProvider>
  </Router>
);
export default Root;
