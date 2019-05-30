/*
 *
 * PostsPage actions
 *
 */

import { postConsts } from './constants';

export const postsFetchRequest = () => ({
  type: postConsts.GET_POSTS,
});
