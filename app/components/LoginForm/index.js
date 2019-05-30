/* eslint-disable prettier/prettier */
import React from 'react';

export const LoginForm = props => {
  return(
    <div>
      <input type="text" placeholder={"Username"}/>
      <input type="password" placeholder={"Password"}/>
      <button>Login</button>
    </div>
  )
}
