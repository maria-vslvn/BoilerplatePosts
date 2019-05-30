/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { authConsts } from './constants';

export const initialState = {
  loggedIn: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case authConsts.LOGIN_SUCCESS:
        return {
          ...state,
          token: action.payload.access_token,
          loggedIn: true,
        };
      case authConsts.LOGIN_FAIL:
        return {
          ...state,
        };
      // case authConsts.LOGOUT:
      //   return {
      //     ...state,
      //   };
      default:
        return state;
    }
  });

export default loginPageReducer;
