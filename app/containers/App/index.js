/* eslint-disable import/named */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Router } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import LoginPage from '../LoginPage';
import { PrivateRoute } from '../../components/PrivateRoute';
import FeaturePage from '../FeaturePage';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  padding: 0 16px;
  flex-direction: column;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
  }

  render() {
    return (
      <AppWrapper>
        <Switch>
          <PrivateRoute exact path="/" component={FeaturePage} />
          <PrivateRoute path="/app" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
