/*
 *
 * PostsPage reducer
 *
 */
import produce from 'immer';
import { postConsts } from './constants';

export const initialState = {
  posts: [],
};

/* eslint-disable default-case, no-param-reassign */
const postsPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case postConsts.POSTS_SUCCESS:
        return {
          ...state,
          posts: action.payload,
        };
      case postConsts.POSTS_FAIL:
        return {
          ...state,
          error: action.err,
        };
      default:
        return state;
    }
  });

export default postsPageReducer;
