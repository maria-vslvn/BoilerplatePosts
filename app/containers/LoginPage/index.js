/**
 *
 * LoginPage
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { authConsts } from './constants';
import { isLogged } from '../../components/PrivateRoute';
import Header from '../../components/Header';

export function LoginPage({ loginSubmit }) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  const [vals, setVals] = useState({});

  const handleLoginSubmit = () => {
    loginSubmit({
      email: vals.username,
      password: vals.password,
    });
  };
  const logout = () => {
    localStorage.removeItem('authItem');
    window.location.reload(true);
  };

  const handleChange = e => {
    e.persist();
    setVals(vals => ({ ...vals, [e.target.name]: e.target.value }));
  };
  return (
    <div className="col-md-6 col-md-offset-3">
      {isLogged && <Header />}
      <h2>Login Page </h2>
      {!isLogged ? (
        <form name="form">
          <input
            name="username"
            value={vals.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            value={vals.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="button" onClick={handleLoginSubmit}>
            Login
          </button>
        </form>
      ) : (
        <div>
          <p>Hey, wanna make some logout?</p>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

LoginPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  loginSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loginSubmit: userData =>
      dispatch({
        type: authConsts.LOGIN_REQUEST,
        payload: userData,
      }),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
