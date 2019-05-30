import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the postsPage state domain
 */

const selectPostsPageDomain = state => state.postsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PostsPage
 */

const makeSelectPostsPage = () =>
  createSelector(
    selectPostsPageDomain,
    substate => substate,
  );

export default makeSelectPostsPage;
export { selectPostsPageDomain };
