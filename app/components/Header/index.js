import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <NavBar>
      <HeaderLink to="/app">
        <FormattedMessage {...messages.home} />
      </HeaderLink>
      <HeaderLink to="/login">
        <FormattedMessage {...messages.login} />
      </HeaderLink>
    </NavBar>
  );
}

export default Header;
