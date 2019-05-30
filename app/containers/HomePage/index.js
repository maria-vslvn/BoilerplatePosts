/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import reducer from './reducer';
import saga from './saga';
import PostContainer from '../Post';
import Header from '../../components/Header';
import rik from '../../assets/images/111.png';

const key = 'home';

const SideList = styled.div`
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-image: url(${rik});
  background-position: bottom;
  background-size: contain;
`;
const SideLink = styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #ffa63d;
  color: #ffa63d;
  position: absolute;
  right: -120px;
  top: 365px;
  &:active {
    background: #ffa63d;
    color: #fff;
  }
`;

const LayoutContent = styled.div`
  min-height: 100vh;
`;

export function HomePage({ match }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <LayoutContent>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Header />
      <SideList>
        <SideLink to={`${match.url}/posts`}>Posts</SideLink>
      </SideList>

      <Switch>
        <Route path={`${match.path}/posts`} component={PostContainer} />
      </Switch>
    </LayoutContent>
  );
}

HomePage.propTypes = {
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
